import Vue from "vue";
import App from "./App.vue";
import "@/style/global.less";
import router from "./router";
import "@/mock";
// import showMessage from "@/utils/showMessage";
// window.showMessage = showMessage;
// showMessage("fasdfasfa",'success');

import showMessage from "@/utils/showMessage";
import vLoading from "@/directives/loading.js";
import "./eventBus";
import store from "@/store";
store.dispatch("setting/fetchSetting");
Vue.prototype.$showMessage = showMessage;
import "@/api/banner";

Vue.directive("loading", vLoading);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
