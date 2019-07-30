import Vue from 'vue'
import VueRouter from 'vue-router'

// vue-router setup
import router from './router'

// buefy setup
import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'

// vue fontawesome setup
import './iconsSetup'

// root component
import App from './App.vue'

// vuex store
import store from '@/store/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(Buefy, {
  defaultIconComponent: 'fa-icon',
})

new Vue({
  router,
  store,
  render: h => h(App),
  strict: true,
}).$mount('#app')
