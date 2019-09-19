import {CreateElement, VNode, VNodeData} from 'vue';

export interface IVNodeData extends VNodeData {
  children?: VNode[];
}

export type FormRule = {
  // 效验类型
  type: 'min'|'max'|'required'|'diy';
  // 效验值
  value?: any;
  // 效验错误时的消息
  message?: string;
  // 当 type === 'diy' 效验规则
  validator?: (data: any, value: any) => boolean;
}

export type FormOptions = {
  // 初始值
  initValue?: any;
  // 从事件中获取值
  getValueFromEvent?: (e: any) => any;
  // 如果 dom 消失了是否保存值
  preserve?: boolean;
  // 收集值的时机 默认change
  trigger?: string;
  // 将值带入组件前进行转化
  normalize?: (data: any) => any;
}

export type FormError = {
  // 错误类型
  type: string;
  // 错误消息
  message: string;
}

export type getInputs = (h: CreateElement) => (type?: string, data?: any) => VNode;

export type FormUtils =  {
  // 重置表单， 如果传了names，只重置names的组件
  resetFields: (names?: string[]) => void;
  // 获取表单组件的值，如果传了names，只获取names的组件的值
  getValues: (names?: string[]) => {[name: string]: any};
  // 获取指定name的组件的值
  getValue: (name: string) => any;
  // 设置组件的值
  setValues: (val: {[name: string]: any}) => void;
  // 设置组件的值和错误状态
  setFields: (val: {[name: string]: {value: any, errors: FormError[]}}) => void;
  // 获取指定组件的错误状态
  getError: (name: string) => FormError[];
  // 获取所有组件的错误状态
  getErrors: (name?: string[]) => {[name: string]: FormError[]};
  // 效验表单的值，如果传了names，只效验names的组件
  validateFields: (func: (values: {[name: string]: any}, errors: {[name: string]: FormError[]}) => void, name?: string[]) => void;
}

export interface IFormItem {
  // 组件的值的名称
  name?: string;
  // 组件类型
  type?: string;
  // 组件的 VNode， 详见Vue
  inputProps?: IVNodeData;
  // 效验规则
  rules?: FormRule[];
  // 组件可选属性 FormOptions
  options?: FormOptions;
  // 组件 label
  title?: string;
  // 额外文字提示
  extra?: string;
  // 当 editable === false 时，显示的文本
  text?: any;
  // 是否可以编辑
  editable?: boolean;
  // 是否必填
  required?: boolean;
  // 是否绑定值到表单
  bindValue?: boolean;
  // 表单初始值
  initData?: any;
  // 传到 getInputs 的 data 的值
  inputData?: any;
}

export interface ItemAttrs extends IFormItem {
  // 是否显示该组件
  show?: boolean;
  // VNode
  input?: VNode;
  // 监听change事件
  onChange?: (e: any) => void;
}

export interface IForm {
  // 监听submit事件
  onSubmit?: () => void;
  // 监听form事件 获取FormUtil对象
  onForm?: (form: FormUtils) => void;
  // 布局
  layout?: 'horizontal'|'vertical'|'inline';
  // 表单初始值
  initData?: any;
  // 表单组件配置
  items?: ItemAttrs[];
}
