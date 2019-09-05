import Vue from 'vue';
import { Component, Vue as VueComponent, Provide } from 'vue-property-decorator';
import 'vue-tsx-support/enable-check';
import Item from '@/form/core/item';
import {Input} from 'ant-design-vue';
import {FormUtils} from '../types/form';
import Form from '@/form/form';

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
          <Form onForm={(f: FormUtils) => this.form = f}>
            <Item name="[test][eer][0]" rules={[{type: 'required', value: true, message: 'null'}]} options={{initValue: '321'}} inputProps={{on: {change(e: any){console.log('1:' + e)}}}}><a-input onChange={() => console.log('333')}/></Item>
            <Item name="[test][eer][1]"><a-input /></Item>
            <button type="submit">sub</button>
          </Form>
          <button onClick={() => this.form.resetFields()}>reset</button>
          <button onClick={() => this.form.setValues({test1: '321'})}>set</button>
          <button onClick={() => this.form.validateFields((val, errs) => {console.log(val, errs)})}>va</button>
        </div>
      </div>
    );
  }
}


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
