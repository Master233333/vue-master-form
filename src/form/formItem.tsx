import {Component, Prop} from 'vue-property-decorator';
import {Component as TsxComponent} from 'vue-tsx-support';
import {FormOptions, FormRule, IFormItem, IVNodeData} from '../../types/form';

@Component
export default class FormItem extends TsxComponent<IFormItem> {
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
  public title?: string;
  @Prop()
  public extra?: string;
  @Prop()
  public text?: (data: any) => string | string;
  @Prop()
  public editable?: boolean;
  @Prop()
  public required?: boolean;
  @Prop()
  public bindValue?: boolean;
  public render() {
    return (
      <div>
        <label>{this.title}</label>
      </div>
    );
  }
}
