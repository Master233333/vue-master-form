import {Component, Provide} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import {createFormObj, FormObj} from '@/form/core/createFormObj';
import {IBaseForm, FormUtils} from '../../../types/form';

@Component
export default class BaseForm extends TsxComponent<IBaseForm> {
  @Provide()
  public readonly form: Readonly<FormUtils>;

  public constructor() {
    super();
    console.log('BaseForm: constructor');
    const f = createFormObj();
    const formUtil = {
      addField: f.addField.bind(f),
      removeField: f.removeField.bind(f),
      bindField: f.bindField.bind(f),
      resetFields: (names?: string[]) => {
        f.resetFields(names);
        this.forceRender();
      },
      getValues: f.getValues.bind(f),
      getValue: f.getValue.bind(f),
      setValues: (val: any) => {
        f.setValues(val);
        this.forceRender();
      },
      setFields: f.setFields.bind(f),
      getError: f.getError.bind(f),
      getErrors: f.getErrors.bind(f),
      validateFields: f.validateFields.bind(f),
    };
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
    if (!child) {
      return;
    }
    child.forEach((c) => {
      if (c.context) {
        c.context.$forceUpdate();
      }
    });
  }
  public onSubmit(e: Event) {
    e.preventDefault();
    console.log('BaseForm: submit values', this.form.getValues());
    this.$emit('submit');
  }
  public render() {
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
