import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import moment from "moment";

moment.locale("fr");
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
