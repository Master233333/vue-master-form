import {Component, Inject, Prop, Provide} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import {FormObj} from '@/form/core/createFormObj';
import {IItem} from '../../../types/form';

@Component
export default class Item extends TsxComponent<IItem> {
  @Inject()
  public form!: any;
  @Prop()
  public name!: string;
  @Prop()
  public required!: boolean;

  public created() {
    console.log(this.form);
    console.log('add field', this.name);
    this.form.addField(this.name);
  }
  public destroyed() {
    console.log('remove field', this.name);
    this.form.removeField(this.name);
  }
  public render() {
    console.log('renderItem ', this.name);
    const {form, name, required} = this;
    const childes = this.$slots.default;
    if (!childes || !childes.length) {
      return '';
    }
    if (childes.length > 1) {
      console.warn('child more than one');
      return '';
    }
    const child = childes[0];
    const newInput = form.bindField({key: name, rules: [{type: 'required', value: required, message: 'can not be null'}]})(child);
    return newInput;
  }
}
