import Vue from 'vue'
import App from './App.vue'
import App02 from './App02.vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import storePlugin from './storePlugin'
Vue.use(storePlugin)

Vue.config.productionTip = false


/*new Vue({
  render: h => h(App02),
}).$mount('#secondApp')


new Vue({
  render: h => h(App),
}).$mount('#firstApp')*/