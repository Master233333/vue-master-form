import {Component, Provide} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import {createFormObj, FormObj} from '@/form/core/createFormObj';
import {IBaseForm, IFormUtils} from '../../../types/form';
import {createStore, Store} from '@/form/core/createStore';

@Component
export default class BaseForm extends TsxComponent<IBaseForm> {
  @Provide()
  public readonly form: Readonly<IFormUtils>;
  private readonly store: Readonly<Store>;
  private readonly formObj: Readonly<FormObj>;

  public constructor() {
    super();
    console.log('BaseForm: constructor');
    const s = createStore();
    const f = createFormObj(s);
    const {addField, removeField} = s;
    const {bindField} = f;
    const formUtil = {
      addField: addField.bind(s),
      removeField: removeField.bind(s),
      bindField: bindField.bind(f),
    };
    this.store = s;
    this.formObj = f;
    this.form = Object.freeze(formUtil);
  }
  public created() {
    console.log('BaseForm: created');
    this.$emit('form', this.form);
  }
  public forceRender() {
    console.log('BaseForm: forceUpdate');
    this.$forceUpdate();
    const child = this.$slots.default;
    if (child) {
      child.forEach((c) => {
        if (c.context) {
          c.context.$forceUpdate();
        }
      });
    }
  }
  public onSubmit(e: Event) {
    e.preventDefault();
    console.log('BaseForm: submit values', this.store.getValues());
    this.$emit('submit');
  }
  protected render() {
    const {onSubmit} = this;
    const child = this.$slots.default;
    console.log('BaseForm: render');
    return (
      <form onSubmit={onSubmit}>
        {child}
      </form>
    );
  }
}
