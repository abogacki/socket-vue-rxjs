import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTemperatureHigh,
  faSun,
  faCompass,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTemperatureHigh, faSun, faCompass)

Vue.component('fa-icon', FontAwesomeIcon)
