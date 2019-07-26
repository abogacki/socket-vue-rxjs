import VueRouter from 'vue-router'
import Weather from '@/components/Weather'
import Location from '@/components/Location'

export const routes = [
  { name: 'Location', path: '/', component: Location },
  {
    name: 'Weather',
    path: '/weather/:location_id',
    component: Weather,
  },
]

export default new VueRouter({ routes, linkActiveClass: 'is-active' })
