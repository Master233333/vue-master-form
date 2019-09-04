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
      default:
        break;
    }
  });
  return errors;
}

export class FormObj extends Store {

  public bindField(context: Vue, name: string, rules?: FormRule[], options?: FormOptions) {
    return (input: VNode, nodeProps: VNodeData = {}) => {
      const {props = {}, on = {}} = nodeProps;
      on.change = (...args: any[]) => {
        this.addListenerOn(name)(...args);
        context.$forceUpdate();
      };
      props.value = this.getValue(name);

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

  private addListenerOn(name: string) {
    return (e?: any) => {
      let value = e;
      if (e && e.target) {
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
