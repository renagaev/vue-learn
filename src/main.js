import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import Vuex from 'vuex'
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
