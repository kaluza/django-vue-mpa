import Vue from 'vue'
import App01 from './App01.vue'
import App02 from './App02.vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import storePlugin from './storePlugin'
Vue.use(storePlugin)

Vue.config.productionTip = false

new Vue({
  render: app02 => app02(App02),
}).$mount('#secondApp')

new Vue({
  render: app01 => app01(App01),
}).$mount('#firstApp')
