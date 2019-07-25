import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import database from '@/database'
import weather from '@/store/modules/weather'

const ormPlugin = VuexORM.install(database)

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [ormPlugin],
  modules: {
    weather,
  },
})
