import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTemperatureHigh,
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faWind,
  faSmog,
  faCompass,
  faSearch,
  faArrowLeft,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faTemperatureHigh,
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faWind,
  faSmog,
  faCompass,
  faSearch,
  faArrowLeft,
  faMapMarkerAlt
)

Vue.component('fa-icon', FontAwesomeIcon)
