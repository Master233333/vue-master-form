import {Store} from '@/form/core/createStore';
import {VNode, VNodeData} from "vue";
import {cloneElement} from "@/utils/vnode";
import {getNames} from '@/utils/objectUtils';

export class FormObj extends Store {

  public bindField(name: string, rules?: any[], options?: any) {
    return (input: VNode, nodeProps: VNodeData = {}) => {
      const {props = {}, on = {}} = nodeProps;
      on.change = (...args: any[]) => {
        this.addListenerOn(name)(...args);
        if (input.context) {
          input.context.$forceUpdate();
        }
      };
      props.value = this.getValue(name);

      this.setOption(name, {rules, ...options});
      return cloneElement(input, {...nodeProps, on, props});
    };
  }

  public setFields(val: any) {
    getNames(val).forEach((name) => {
      const {setValues, getMeta, setMeta} = this;
      setValues({name: val[name].value});
      const meta = getMeta(name);
      meta.errors = val[name].errors;
      setMeta(name, meta);
    });
  }

  public getError(name: string) {
    return this.getMeta(name).errors;
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
    const {setMeta, getMeta} = this;
    const meta = getMeta(name);
    getNames(option).forEach((key) => {
      meta[key] = option[key];
    });
    setMeta(name, meta);
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
  return Object.freeze(new FormObj());
}
