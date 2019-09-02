import {Component, Provide} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import {createFormObj} from '@/form/core/createFormObj';
import {IBaseForm} from '../../../types/form';
import {createStore} from '@/form/core/createStore';

@Component
export default class BaseForm extends TsxComponent<IBaseForm> {
  private store;
  private formObj;
  @Provide()
  public form;
  public constructor() {
    super();
    this.store = createStore();
    this.formObj = createFormObj(this.store);
    const {addField} = this.store;
    this.form = {
      addField: (name: string) => addField(name),
    };
  }
  public created() {
    console.log('createBaseForm');
    this.$emit('form', this.form);
  }

  public forceRender() {
    const child = this.$slots.default;
    child && child.forEach((c) => {
      c.context && c.context.$forceUpdate();
    });
  }

  public onSubmit(e: Event) {
    e.preventDefault();
    this.$emit('submit');
  }
  protected render() {
    const {onSubmit} = this;
    const child = this.$slots.default;
    console.log('renderBaseForm');
    return (
      <form onSubmit={onSubmit}>
        {child}
      </form>
    );
  }
}
