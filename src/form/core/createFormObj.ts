import {Store} from '@/form/core/createStore';
import {VNode, VNodeData} from "vue";
import {cloneElement, getVNodeListeners} from '@/utils/vnode';
import {getNames} from '@/utils/objectUtils';
import {FormError, FormOptions, FormRule, FormUtils} from '../../../types/form';
import {Vue} from 'vue/types/vue';

function validateRules(value: any, rules?: FormRule[]) {
  if (!rules) {
    return [];
  }
  const errors: FormError[] = [];
  const addError = (rule: FormRule) => {
    errors.push({
      type: rule.type,
      message: rule.message || '',
    });
  };
  rules.forEach((rule) => {
    switch (rule.type) {
      case 'required':
        if (!value) {
          addError(rule);
        }
        break;
      case 'max':
        if (typeof value === 'string' && value.length > rule.value) {
          addError(rule);
        }
        if (typeof value === 'number' && value > rule.value) {
          addError(rule);
        }
        break;
      case 'min':
        if (typeof value === 'string' && value.length < rule.value) {
          addError(rule);
        }
        if (typeof value === 'number' && value < rule.value) {
          addError(rule);
        }
        break;
      case 'diy':
      default:
        if (!rule.validator) {
          break;
        }
        if (rule.validator(value, rule.value)) {
          addError(rule);
        }
        break;
    }
  });
  return errors;
}

function getFullName(name: string, list?: string[]): string[] {
  if (!list) {
    list = [];
  }
  if (!name.length) {
    return list;
  }
  const index = name.indexOf('[');
  if (index !== -1) {
    if (index !== 0) {
      list.push(name.substring(0, index));
      name = name.substring(index);
    }
    list.push(name.substring(1, name.indexOf(']')));
    return getFullName(name.substring(name.indexOf(']') + 1), list);
  } else {
    return [...list, name];
  }
}

export class FormObj extends Store implements FormUtils {
  private context: Vue;

  public constructor(context: Vue) {
    super();
    this.context = context;
  }
  public setValues(val: any) {
    super.setValues(val);
    this.forceUpdateAll();
  }

  public resetFields(names?: string[]) {
    super.resetFields(names);
    this.forceUpdateAll();
  }

  public getValue(name: string) {
    const value = super.getValue(name);
    if (!value && this.getOption(name, 'hasChange') !== true) {
      return this.getOption(name, 'initValue');
    }
    return value;
  }

  public getValues(names?: string[]) {
    const out: any = {};
    const values = this.getFieldValues(names);
    const reg = /^[\d|\.]*$/;
    getNames(values).forEach((name) => {
      const ns = getFullName(name);
      let newName = '';
      ns.forEach((nn, i) => {
        // tslint:disable-next-line:no-eval
        const obj = eval('out' + newName);
        if (i === ns.length - 1) {
          obj[nn] = values[name];
        } else if (!obj[nn]) {
          const isNum = reg.test(ns[i]);
          obj[nn] = isNum ? [] : {};
        } else {
          const isNum = reg.test(ns[i]);
          if (isNum && Array.isArray(obj[nn])) {
            console.error('FormObj: can not setForm with diff type');
          }
          if (!isNum && typeof obj[nn] !== 'object') {
            console.error('FormObj: can not setForm with diff type');
          }
        }
        newName += `['${nn}']`;
      });
    });
    return out;
  }

  public bindField(context: Vue, name: string, rules?: FormRule[], options: FormOptions = {}) {
    this.setOption(name, {rules, ...options});
    return (input: VNode, nodeProps: VNodeData = {}) => {
      const {props = {}, on = {}} = nodeProps;
      const trigger = options.trigger || 'change';
      const initListeners = getVNodeListeners(input);
      const newOn = {...on};
      newOn[trigger] = (...args: any[]) => {
        if (on[trigger]) {
          // @ts-ignore
          on[trigger](...args);
        }
        this.addListenerOn(name, options.getValueFromEvent)(...args);
        context.$forceUpdate();
      };
      getNames(newOn).forEach((key) => {
        if (initListeners && initListeners.hasOwnProperty(key)) {
          const initAction = newOn[key];
          newOn[key] = (...args: any[]) => {
            // @ts-ignore
            initListeners[key](...args);
            // @ts-ignore
            initAction(...args);
          };
        }
      });

      let value = this.getValue(name);
      if (options.normalize) {
        value = options.normalize(value);
      }
      props.value = value;

      return cloneElement(input, {...nodeProps, on: newOn, props});
    };
  }

  public validateFields(func: (values: {[name: string]: any}, errors: {[name: string]: FormError[]}) => void, names?: string[]) {
    const values = this.getFieldValues(names);
    const errors: any = {};
    getNames(values).forEach((name) => {
      const rules = this.getOption(name, 'rules');
      const errs = validateRules(values[name], rules);
      this.setOption(name, {errors: errs});
      if (errs.length) {
        errors[name] = errs;
      }
    });
    func(this.getValues(names), getNames(errors).length ? errors : undefined);
  }

  public setFields(val: {[name: string]: {value: any, errors: FormError[]}}) {
    getNames(val).forEach((name) => {
      const {setValues, getMeta, setMeta} = this;
      setValues({name: val[name].value});
      const meta = getMeta(name);
      meta.errors = val[name].errors;
      setMeta(name, meta);
    });
  }

  public getError(name: string) {
    return this.getOption(name, 'errors');
  }

  public getErrors(names?: string[]) {
    const metas = this.getMetas(names);
    const out: any = {};
    getNames(metas).forEach((name) => {
      const errors = metas[name].errors;
      if (errors) {
        out[name] = errors;
      }
    });
    return getNames(out).length ? out : undefined;
  }

  private getFieldValues(names?: string[]) {
    const out: any = {};
    let ns = names;
    if (!ns) {
      ns = getNames(super.getValues());
    }
    ns.forEach((name) => out[name] = this.getValue(name));
    return out;
  }

  private setOption(name: string, option: any) {
    const meta = this.getMeta(name);
    getNames(option).forEach((key) => {
      meta[key] = option[key];
    });
    this.setMeta(name, meta);
  }

  private getOption(name: string, key: string) {
    return this.getMeta(name)[key];
  }

  private addListenerOn(name: string, getValueFromEvent?: (e: any) => any) {
    return (e?: any) => {
      let value = e;
      if (getValueFromEvent) {
        value = getValueFromEvent(e);
      } else if (e && e.target) {
        value = e.target.checked || e.target.value;
      }
      this.setValues({[name]: value});
      this.setOption(name, {hasChange: true});
      console.log(`FormObj: change name:${name} value:${value}`);
    };
  }

  private forceUpdate() {
    console.log('FormObj: update');
    this.context.$forceUpdate();
  }

  private forceUpdateAll() {
    console.log('FormObj: update all');
    this.forceUpdate();
    const child = this.context.$slots.default;
    if (!child) {
      return;
    }
    child.forEach((c) => {
      if (c.context) {
        c.context.$forceUpdate();
      }
    });
  }
}

export function createFormObj(context: Vue) {
  return Object.freeze(new FormObj(context));
}
