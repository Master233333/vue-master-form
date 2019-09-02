import {Store} from '@/form/core/createStore';
import {VNode, VNodeData} from "vue";
import {cloneElement} from "@/utils/vnode";

export class FormObj {
  private store: Readonly<Store>;

  public constructor(s: Readonly<Store>) {
    this.store = s;
  }

  public bindField(key: string, rules?: any[], options?: any) {
    return (input: VNode, nodeProps: VNodeData = {}) => {
      const {props = {}, on = {}} = nodeProps;
      on.change = (...args: any[]) => {
        this.addListenerOn(key)(...args);
        if (input.context) {
          input.context.$forceUpdate();
        }
      };
      props.value = this.store.getValue(key);
      return cloneElement(input, {...nodeProps, on, props});
    };
  }

  private addListenerOn(name: string) {
    return (e?: any) => {
      let value = e;
      if (e && e.target) {
        value = e.target.checked || e.target.value;
      }
      this.store.setValues({[name]: value});
      console.log(`FormObj: change name:${name} value:${value}`);
    };
  }
}

export function createFormObj(s: Readonly<Store>) {
  return Object.freeze(new FormObj(s));
}
