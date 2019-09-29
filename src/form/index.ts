import Vue from 'vue';
import IForm, {renderFormItem} from './form';
import FormItem from './formItem';
import config from './config';
import './index.less';
import {getInputs} from '../../types/form';

export function setErrorMessage(errorMsg: any) {
  if (errorMsg) {
    config.errorMessage = errorMsg || {};
  }
}

export function setGetInputs(func?: getInputs) {
  if (func) {
    config.getInputs = func;
  }
}

export class Form extends IForm {
  public name = 'mh-form';
  public static install(vue: typeof Vue, options: {getInputs?: getInputs, errorMessage?: any}) {
    setErrorMessage(options.errorMessage);
    setGetInputs(options.getInputs);
    vue.component('mh-form', Form);
    vue.component('mh-form-item', FormItem);
  }
}

export {FormItem, renderFormItem};
