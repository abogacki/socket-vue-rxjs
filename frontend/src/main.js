import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// vue-router setup
import router from './router'

// buefy setup
import buefy from 'buefy'
import 'buefy/dist/buefy.css'

// vue fontawesome setup
import './iconsSetup'

// root component
import App from './App.vue'

// vuex store
import store from '@/store/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(buefy)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
