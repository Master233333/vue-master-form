import {Form, FormItem, renderFormItem} from './form';
import {Vue} from 'vue/types/vue';

// @ts-ignore
Form.FormItem = FormItem;
// @ts-ignore
Form.renderFormItem = renderFormItem;

// @ts-ignore
Form.install = function(vue: Vue) {
  Vue.component('mh-form', Form);
  Vue.component('mh-form-item', FormItem);
};

export default Form;
