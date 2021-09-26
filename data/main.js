// import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


createApp(App).use(store).use(router).mount("#app");

// Vue.config.productionTip=false;


// Vue.directive("font",{
//     bind: function (el,binding) {
//          el.style.fontSize = binding.value + 'px';
//     }
// });