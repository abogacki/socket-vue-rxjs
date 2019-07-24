import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './App.vue'
import buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueAnime from 'vue-animejs'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTemperatureHigh,
  faSun,
  faCompass,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTemperatureHigh, faSun, faCompass)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAnime)
Vue.use(buefy)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
