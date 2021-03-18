import Vue from 'vue'
import axios from 'axios'

import { VTooltip } from 'v-tooltip';
Vue.directive('tooltip', VTooltip);

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import App from './App.vue'
// import router from './router'
import store from './store'

import  './assets/styles/styles.scss';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')
