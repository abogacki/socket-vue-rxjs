import VueRouter from 'vue-router'
import Weather from '@/components/views/WeatherView'
import LocationList from '@/components/views/LocationListView'

export const routes = [
  { name: 'Locations', path: '/', component: LocationList },
  {
    name: 'Weather',
    path: '/weather/:location/',
    component: Weather,
  },
]

export default new VueRouter({ routes, linkActiveClass: 'is-active' })
