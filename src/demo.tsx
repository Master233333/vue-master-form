import Vue from 'vue';
import { Component, Vue as VueComponent, Provide } from 'vue-property-decorator';
import 'vue-tsx-support/enable-check';
import BaseForm from '@/form/core/baseForm';
import Item from '@/form/core/item';
import {Input} from 'ant-design-vue';
import {FormUtils} from '../types/form';

Vue.use(Input);

@Component
class App extends VueComponent {
  public form!: FormUtils;
  public render() {
    console.log('Demo: render');
    return (
      <div>
        <div>
          <h3>test for base form</h3>
          <BaseForm onForm={(f: FormUtils) => this.form = f}>
            <Item name="test1"><a-input /></Item>
            <Item name="test2"><a-input /></Item>
            <button type="submit">sub</button>
          </BaseForm>
          <button onClick={() => this.form.resetFields()}>reset</button>
          <button onClick={() => this.form.setValues({test1: '321'})}>set</button>
        </div>
      </div>
    );
  }
}


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
