import {Component, Inject, Prop} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import {FormOptions, FormRule, IFormItem, IVNodeData} from '../../types/form';
import {FormObj} from './core/createFormObj';
import Item from './core/item';
import config from './config';
import {VNode} from 'vue';

@Component
export default class FormItem extends TsxComponent<IFormItem> {
  @Inject()
  public form!: FormObj;
  @Prop()
  public name?: string;
  @Prop()
  public type?: string;
  @Prop()
  public inputProps?: IVNodeData;
  @Prop()
  public rules?: FormRule[];
  @Prop()
  public options?: FormOptions;
  @Prop()
  public title?: string | VNode;
  @Prop()
  public extra?: string;
  @Prop()
  public text?: any;
  @Prop()
  public editable?: boolean;
  @Prop()
  public required?: boolean;
  @Prop()
  public bindValue?: boolean;
  @Prop()
  public initData!: any;
  @Prop()
  public inputData!: any;
  public getInput = config.getInputs(this.$createElement);

  public render() {
    const {name, type, inputProps, rules, options, title, extra, text, editable, required, bindValue, initData, getInput, inputData, form} = this;
    let input: any = this.$slots.default || getInput(type || 'text', inputData);
    const data = initData && name && initData[name];
    const rl = rules || [];
    let errorMsg;
    if (required) {
      const f = rl.find((r) => r.type === 'required');
      if (!f) {
        rl.push({type: 'required'});
      }
    }
    let opt = options || {};
    if (data && !opt.initValue) {
      opt = {...opt, initValue: data};
    }
    if (editable === false) {
      if (text && typeof text === 'string') {
        input = text;
      } else if (text) {
        input = text(data, initData);
      } else {
        input = data;
      }
    } else if (input && bindValue !== false && name) {
      input = <Item name={name} context={this} rules={rl} options={opt} inputProps={inputProps}>{input}</Item>;
      const errors = this.form.getError(name);
      if (errors && errors.length) {
        errorMsg = errors[0].message;
      }
    }
    // if (typeof errorMsg === 'string') {
    //   // @ts-ignore
    //   errorMsg = errorMsg.replace(/%t/, title || '');
    // }
    // @ts-ignore
    return <div class={{'mh-form-item': true, 'mh-form-item-help': errorMsg || extra, 'mh-form-item-editable': editable === false, 'has-error': errorMsg}} for={name}>
      <div class={{'mh-form-item-label': true, 'mh-form-item-label-required': required && editable !== false}}>
        {title && <label>{title}</label>}
      </div>
      <div class="mh-form-item-control-wrapper">
        <div class="mh-form-item-control">{input}</div>
        {errorMsg && <div class="mh-form-item-error">{errorMsg.replace(/%t/, title || '')}</div>}
        {extra && <div class="mh-form-item-extra">{extra}</div>}
      </div>
    </div>;
  }
}
