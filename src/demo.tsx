import Vue from 'vue';
import { Component, Vue as VueComponent, Provide } from 'vue-property-decorator';
import 'vue-tsx-support/enable-check';
import {FormUtils} from '../types/index';
import {Form} from './form';
import {ItemAttrs} from '../types/form';

@Component
class App extends VueComponent {
  public form!: FormUtils;
  public render() {
    const items: ItemAttrs[] = [
      {
        name: 'test1',
        title: 'test1',
        required: true,
        inputProps: {
          attrs: {
            placeholder: 'test',
            addonAfter: 'aaa',
            allowClear: true,
            prefix: 'ppp',
          },
        }
      },
      {
        name: 'test2',
        title: 'test2',
        rules: [{type: 'max', value: 5}],
        extra: 'test',
      },
    ];
    return (
      <div>
        <div>
          <h3>test for base form</h3>
          <Form onForm={(f: FormUtils) => this.form = f} items={items} layout="horizontal" >
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
