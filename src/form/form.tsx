import {Component, Inject, Prop, Provide} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import {FormUtils, IForm, ItemAttrs} from '../../types/form';
import {createFormObj} from './core/createFormObj';
import FormItem from "./formItem";
import {CreateElement} from 'vue';

export function renderFormItem(h: CreateElement, item: ItemAttrs, initData?: any) {
  if (item.show === false) {
    return ;
  }
  if (item.type === 'other') {
    return item.input;
  }
  const inputProps = item.inputProps || {};
  if (item.onChange) {
    inputProps.on = {...inputProps.on, change: item.onChange};
  }
  return <FormItem
    key={item.name}
    name={item.name}
    type={item.type}
    inputProps={inputProps}
    rules={item.rules}
    options={item.options}
    title={item.title}
    extra={item.extra}
    text={item.text}
    editable={item.editable}
    required={item.required}
    bindValue={item.bindValue}
    initData={item.initData}
    inputData={item.inputData}
  >{item.input}</FormItem>;
}

@Component
export default class Form extends TsxComponent<IForm> {
  @Provide()
  public readonly form = createFormObj(this);
  @Prop()
  public layout!: string;
  @Prop()
  public initData: any;
  @Prop({
    default: () => [],
  })
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
    this.loading = true;
    setTimeout(() => this.loading = false, 800);
    this.form.validateFields((values: any, errs: any) => {
      console.log('Form: submit: ', values, errs);
      if (!errs) {
        this.$emit('submit');
      }
    });
  }
  public render() {
    const {onSubmit, layout, initData, items} = this;
    const child = this.$slots.default;
    const inputs = items.map((item) => renderFormItem(this.$createElement, item, initData));
    return (
      <form onSubmit={onSubmit} class="mh-form">
        {inputs}
        {child}
      </form>
    );
  }
}