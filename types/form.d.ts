import {VNode, VNodeData} from "vue";
import {Vue} from 'vue/types/vue';

export interface IVNodeData extends VNodeData {
  children?: VNode[];
}

export interface FormRule {
  type: string;
  value: any;
  message?: string;
  validator?: (data: any) => boolean;
}

export interface FormOptions {
  initValue?: any;
  getValueFromEvent?: (e: any) => any;
  preserve?: boolean;
  trigger?: string;
  normalize?: (data: any) => any;
}

export interface FormError {
  type: string;
  message: string;
}

export interface FormUtils {
  addField: (name: string) => void;
  removeField: (name: string) => void;
  bindField: (context: Vue, name: string, rules?: FormRule[], options?: FormOptions) => (input: VNode, props?: IVNodeData) => VNode;
  resetFields: (names?: string[]) => void;
  getValues: (names?: string[]) => {[name: string]: any};
  getValue: (name: string) => any;
  setValues: (val: {[name: string]: any}) => void;
  setFields: (val: {[name: string]: {value: any, errors: FormError[]}}) => void;
  getError: (name: string) => FormError[];
  getErrors: (name?: string[]) => {[name: string]: FormError[]};
  validateFields: (func: (values: {[name: string]: any}, errors: {[name: string]: FormError[]}) => void, name?: string[]) => void;
}

export interface IBaseForm {
  onSubmit?: () => void;
  onForm?: (form: FormUtils) => void;
  onChange?: (val: any) => void;
}

export interface IItem {
  name: string;
  rules?: FormRule[];
  options?: FormOptions;
  inputProps?: IVNodeData;
}

export interface IFormItem {
  name?: string;
  type?: string;
  inputProps?: IVNodeData;
  rules?: FormRule[];
  options?: FormOptions;
  title?: string;
  extra?: string;
  text?: (data: any) => string | string;
  editable?: boolean;
  required?: boolean;
  bindValue?: boolean;
}

export interface ItemAttrs extends IFormItem {
  show?: boolean;
  input?: VNode;
}

export interface IForm extends IBaseForm {
  layout?: string;
  initData?: any;
  items?: ItemAttrs[];
}
