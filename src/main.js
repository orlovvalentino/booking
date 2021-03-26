import Vue from 'vue'
import axios from 'axios';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import "@babel/polyfill";

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

window.HELIOS_HF = {
  pageTitle: 'Nissan',
  isUserLoggedIn: false,
  userName: '',
  avatarUrl: '...',
  displayLiveChat: true,
  displayDataTag: true
};

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
