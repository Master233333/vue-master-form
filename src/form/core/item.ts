import {Component, Inject, Prop, Provide} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import {FormOptions, FormRule, FormUtils, IItem, IVNodeData} from '../../../types/form';

@Component
export default class Item extends TsxComponent<IItem> {
  @Inject()
  public form!: Readonly<FormUtils>;
  @Prop()
  public name!: string;
  @Prop()
  public rules?: FormRule[];
  @Prop()
  public options?: FormOptions;
  @Prop()
  public inputProps?: IVNodeData;

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
    console.log('Item: render', this.name);
    const {form, name, rules, options, inputProps} = this;
    const childes = this.$slots.default;
    if (!childes || !childes.length) {
      return '';
    }
    if (childes.length > 1) {
      console.warn('child more than one');
      return '';
    }
    const child = childes[0];
    return form.bindField(this, name, rules, options)(child, inputProps);
  }
}
