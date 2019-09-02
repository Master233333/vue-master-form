import Vue from 'vue';
import { Component, Vue as VueComponent, Provide } from 'vue-property-decorator';
import 'vue-tsx-support/enable-check';
import BaseForm from '@/form/core/baseForm';
import Item from '@/form/core/item';
import {Input} from 'ant-design-vue';

@Component
class App extends VueComponent {
  public render() {
    return <BaseForm>
      <Item name="test"><Input /></Item>
    </BaseForm>;
  }
}


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
