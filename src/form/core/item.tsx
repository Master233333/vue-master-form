import {Component, Inject, Prop} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import {FormOptions, FormRule, IItem, IVNodeData} from '../../../types/form';
import {FormObj} from './createFormObj';

@Component
export default class Item extends TsxComponent<IItem> {
  @Inject()
  public form!: FormObj;
  @Prop()
  public name!: string;
  @Prop()
  public inputProps?: IVNodeData;
  @Prop()
  public rules?: FormRule[];
  @Prop()
  public options?: FormOptions;
  @Prop()
  public context?: any;

  public created() {
    console.log('Item: add field', this.name);
    this.form.addField(this.name);
  }
  public destroyed() {
    if (this.options && this.options.preserve) {
      return;
    }
    console.log('Item: remove field', this.name);
    this.form.removeField(this.name);
  }
  public render() {
    console.log("Item: render");
    const {name, inputProps, rules, options, form, context} = this;
    // @ts-ignore
    const input: any = this.$slots.default[0];
    return form.bindField(context, name, rules, options)(input, inputProps);
  }
}
