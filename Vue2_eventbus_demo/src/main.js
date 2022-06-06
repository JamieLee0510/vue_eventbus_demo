import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

//self made eventBus plugin
// import EventBus from './plugins/EventBus';
// Vue.use(EventBus);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
