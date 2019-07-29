import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import database from '@/database'

const OrmPlugin = VuexORM.install(database)

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [OrmPlugin],
})
