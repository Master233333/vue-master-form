import {Component, Inject, Prop, Provide} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import BaseForm from '@/form/core/baseForm';
import {FormUtils, IForm, ItemAttrs} from '../../types/form';

@Component
export default class Form extends TsxComponent<IForm> {
  @Prop()
  public layout!: string;
  @Prop()
  public initData: any;
  @Prop()
  public items!: ItemAttrs[];

  public onForm(form: FormUtils) {
    console.log('Form: onForm');
    this.$emit('form', form);
  }
  public onSubmit() {
    console.log('Form: submit');
    this.$emit('submit');
  }
  public render() {
    const {onSubmit, onForm} = this;
    const child = this.$slots.default;
    return (
      <BaseForm onSubmit={onSubmit} onForm={onForm}>
        {child}
      </BaseForm>
    );
  }
}
