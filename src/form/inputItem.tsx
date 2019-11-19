import {Component, Prop} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import {IInputItem} from '../../types/form';
import {cloneElement} from '../utils/vnode';

@Component
export default class InputItem extends TsxComponent<IInputItem> {
  @Prop()
  public normalize!: (data: any, emit?: (data: any) => void) => any;
  @Prop()
  public getValueFromEvent?: (e: any) => any;
  @Prop({
    default: 'change'
  })
  public trigger?: string;
  @Prop()
  public value!: any;
  public render() {
    const child = this.$slots.default;
    const input = child && child[0];
    const {$props, $attrs, normalize, getValueFromEvent, trigger} = this;
    let value = $props.value;
    let change;
    if (normalize) {
      value = normalize(value, (val: any) => this.$emit('change', val));
    }
    if (getValueFromEvent) {
      change = (e: any) => this.$emit('change', getValueFromEvent(e));
    } else {
      change = (e: any) => this.$emit('change', e);
    }
    return input && cloneElement(input, {props: {...$attrs, value}, on: {[trigger + '']: change}});
  }
}
