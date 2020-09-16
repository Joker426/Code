import Vue from 'vue';
import uView from 'uview-ui';
import App from './App.vue';
import store from './store';

Vue.use(uView);
Vue.prototype.$store = store;
Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
  ...App,
  store,
});

app.$mount();
