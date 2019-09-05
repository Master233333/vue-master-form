import {Component, Inject, Prop, Provide} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import {FormUtils, IForm, ItemAttrs} from '../../types/form';
import {createFormObj} from '@/form/core/createFormObj';

@Component
export default class Form extends TsxComponent<IForm> {
  @Provide()
  public readonly form = createFormObj(this);
  @Prop()
  public layout!: string;
  @Prop()
  public initData: any;
  @Prop()
  public items!: ItemAttrs[];

  public created() {
    this.$emit('form', this.form);

  }
  public onSubmit(e: Event) {
    e.preventDefault();
    console.log('Form: submit');
    this.$emit('submit');
  }
  public render() {
    const {onSubmit} = this;
    const child = this.$slots.default;
    return (
      <form onSubmit={onSubmit}>
        {child}
      </form>
    );
  }
}
