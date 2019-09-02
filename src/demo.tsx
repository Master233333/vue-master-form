import Vue from 'vue';
import { Component, Vue as VueComponent, Provide } from 'vue-property-decorator';
import 'vue-tsx-support/enable-check';
import BaseForm from '@/form/core/baseForm';
import Item from '@/form/core/item';
import {Input} from 'ant-design-vue';

Vue.use(Input);

@Component
class App extends VueComponent {
  public render() {
    return (
      <div>
        <div>
          <h3>test for base form</h3>
          <BaseForm>
            <Item name="test"><a-input class={["test", "test2"]}/></Item>
            <button type="submit">sub</button>
          </BaseForm>
        </div>
      </div>
    );
  }
}


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
