import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexLocalStorage from '@/plugins/VuexLocalStorage'
import database from '@/database'

const OrmPlugin = VuexORM.install(database)

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [OrmPlugin],
})
