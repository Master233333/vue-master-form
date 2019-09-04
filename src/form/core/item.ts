import {Component, Inject, Prop, Provide} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import {FormUtils, IItem} from '../../../types/form';

@Component
export default class Item extends TsxComponent<IItem> {
  @Inject()
  public form!: Readonly<FormUtils>;
  @Prop()
  public name!: string;

  public created() {
    console.log('Item: add field', this.name);
    this.form.addField(this.name);
  }
  public destroyed() {
    console.log('Item: remove field', this.name);
    this.form.removeField(this.name);
  }
  public render() {
    console.log('Item: render', this.name);
    const {form, name} = this;
    const childes = this.$slots.default;
    if (!childes || !childes.length) {
      return '';
    }
    if (childes.length > 1) {
      console.warn('child more than one');
      return '';
    }
    const child = childes[0];
    return form.bindField(this, name)(child);
  }
}
