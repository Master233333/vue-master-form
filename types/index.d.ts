import {MhComponent} from './component';
import {FormUtils, IForm, IFormItem, ItemAttrs} from './form';
import {Component as TsxComponent} from 'vue-tsx-support';
import {CreateElement, VNode} from 'vue';

export type FormUtils = FormUtils
export type ItemAttrs = ItemAttrs
export declare class Form extends MhComponent<IForm> {}
export declare class FormItem extends TsxComponent<IFormItem> {}
export declare function renderFormItem(h: CreateElement, item: ItemAttrs, initData?: any): VNode
