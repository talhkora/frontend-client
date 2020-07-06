import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

vue.use(BootstrapVue);
vue.use(IconsPlugin);
