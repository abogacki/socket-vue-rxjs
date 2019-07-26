// action types
export const OPEN_CONNECTION = 'openConnection'
export const CLOSE_CONNECTION = 'closeConnection'

// mutation types
export const UPDATE_WEATHER = 'update'
export const CREATE_SERVICE = 'createService'
export const REMOVE_SERVICE = 'removeConnection'

// getter types
export const GET_CURRENT_BY_POSITION = 'currentByPosition'
export const GET_DAILY_BY_POSITION = 'dailyByPosition'
export const GET_SERVICE_BY_POSITION = 'serviceByPosition'

const getters = {}

const actions = {}

const mutations = {}

export default {
  mutations,
  actions,
  getters,
}
