import Vue from 'vue'
import VueRouter from 'vue-router'

// vue-router setup
import router from './router'

// buefy setup
import buefy from 'buefy'
import 'buefy/dist/buefy.css'

// vue fontawesome setup
import './iconsSetup'

// root component
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(buefy)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
