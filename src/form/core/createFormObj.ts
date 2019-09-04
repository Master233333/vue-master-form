import {Store} from '@/form/core/createStore';
import {VNode, VNodeData} from "vue";
import {cloneElement} from "@/utils/vnode";
import {getNames} from '@/utils/objectUtils';
import {FormError, FormOptions, FormRule} from '../../../types/form';
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

export class FormObj extends Store {

  public getValue(name: string) {
    return super.getValue(name) || this.getOption(name, 'initValue');
  }

  public getValues(names?: string[]) {
    const out: any = {};
    let ns = names;
    if (!ns) {
      ns = getNames(super.getValues());
    }
    ns.forEach((name) => out[name] = this.getValue(name));
    return out;
  }

  public bindField(context: Vue, name: string, rules?: FormRule[], options: FormOptions = {}) {
    return (input: VNode, nodeProps: VNodeData = {}) => {
      const {props = {}, on = {}} = nodeProps;
      const trigger = options.trigger || 'change';
      const initOn = on[trigger];
      console.log(initOn);
      on[trigger] = (...args: any[]) => {
        console.log(initOn);
        if (initOn) {
          initOn(...args);
        }
        this.addListenerOn(name, options.getValueFromEvent)(...args);
        context.$forceUpdate();
      };
      let value = this.getValue(name) || options.initValue;
      if (options.normalize) {
        value = options.normalize(value);
      }
      props.value = value;

      this.setOption(name, {rules, ...options});
      return cloneElement(input, {...nodeProps, on, props});
    };
  }

  public validateFields(func: (values: {[name: string]: any}, errors: {[name: string]: FormError[]}) => void, names?: string[]) {
    const values = this.getValues(names);
    const errors: any = {};
    getNames(values).forEach((name) => {
      const rules = this.getOption(name, 'rules');
      const errs = validateRules(values[name], rules);
      this.setOption(name, {errors: errs});
      if (errs.length) {
        errors[name] = errs;
      }
    });
    func(values, getNames(errors).length ? errors : undefined);
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
      console.log(`FormObj: change name:${name} value:${value}`);
    };
  }
}

export function createFormObj() {
  return new FormObj();
}
