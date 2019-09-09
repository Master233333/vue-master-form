import Vue from 'vue';
import { Component, Vue as VueComponent, Provide } from 'vue-property-decorator';
import 'vue-tsx-support/enable-check';
import {Input} from 'ant-design-vue';
import {FormUtils} from '../types/form';
import Form from '@/form/form';

Vue.use(Input);

@Component
class App extends VueComponent {
  public form!: FormUtils;
  public render() {
    console.log('Demo: render');
    const items = [
      {
        name: 'test1',
        title: 'test1',
        required: true,
      },
      {
        name: 'test2',
        title: 'test2',
        rules: [{type: 'max', value: 5}],
      },
    ];
    return (
      <div>
        <div>
          <h3>test for base form</h3>
          <Form onForm={(f: FormUtils) => this.form = f} items={items}>
            <button type="submit">sub</button>
          </Form>
          <button onClick={() => this.form.resetFields()}>reset</button>
          <button onClick={() => this.form.setValues({test1: '321'})}>set</button>
          <button onClick={() => this.form.validateFields((val, errs) => {console.log(val, errs); })}>va</button>
        </div>
      </div>
    );
  }
}


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
