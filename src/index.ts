import {Form, FormItem, renderFormItem} from './form';
import {Vue} from 'vue/types/vue';

// @ts-ignore
Form.install = function(vue: Vue, options: any) {
  Vue.mixin({provide: {getInputs: options.getInputs}});
  Vue.component('mh-form', Form);
  Vue.component('mh-form-item', FormItem);
};

export {Form, FormItem, renderFormItem};

