import VueRouter from 'vue-router'
import Archive from '@/components/views/ArchiveView'
import Posts from '@/components/views/PostsView'
import Weather from '@/components/views/WeatherView'

export const routes = [
  { name: 'Weather', path: '/', component: Weather },
  { name: 'Archive', path: '/archive', component: Archive },
  { name: 'Posts', path: '/post', component: Posts },
]

export default new VueRouter({ routes, linkActiveClass: 'is-active' })
