import Vue from 'vue';
import { Component, Vue as VueComponent, Provide } from 'vue-property-decorator';
import 'vue-tsx-support/enable-check';

@Component
class App extends VueComponent {
  public render() {
    return <div>123</div>;
  }
}


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
