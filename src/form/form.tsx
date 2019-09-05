import {Component, Inject, Prop, Provide} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import {FormUtils, IForm, ItemAttrs} from '../../types/form';
import {createFormObj} from '@/form/core/createFormObj';
import FormItem from "@/form/formItem";

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
  public loading = false;

  public created() {
    console.log('Form: created');
    this.$emit('form', this.form);
  }
  public onSubmit(e: Event) {
    e.preventDefault();
    if (this.loading) {
      return;
    }
    console.log('Form: submit');
    this.loading = true;
    setTimeout(() => this.loading = false, 800);
    this.form.validateFields((values: any, errs: any) => {
      if (!errs) {
        this.$emit('submit');
      }
    });
  }
  public render() {
    const {onSubmit, layout, initData, items} = this;
    const child = this.$slots.default;
    const inputs = items.map((item) => <FormItem
      key={item.name}
      name={item.name}
      title={item.title}
      type={item.type}
    />);
    return (
      <form onSubmit={onSubmit}>
        {child}
        {inputs}
      </form>
    );
  }
}
