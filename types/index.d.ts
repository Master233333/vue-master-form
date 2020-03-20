import {MhComponent} from './component';
import {FormUtils as Utils, IForm, IFormItem, ItemAttrs as Attrs} from './form';
import {Component as TsxComponent} from 'vue-tsx-support';
import {CreateElement, VNode} from 'vue';

export type FormUtils = Utils
export type ItemAttrs = Attrs
export declare class Form extends MhComponent<IForm> {}
export declare class FormItem extends TsxComponent<IFormItem> {}
export declare class InputItem extends TsxComponent<IFormItem> {}
export declare function renderFormItem(h: CreateElement, item: ItemAttrs, initData?: any): VNode
