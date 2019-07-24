import weatherService from '@/_services/weather.service'

// action types
export const OPEN_CONNECTION = 'weatherOpenConnection'
export const CLOSE_CONNECTION = 'weatherCloseConnection'

// mutation types
export const UPDATE_WEATHER = 'weatherUpdate'

const state = {
  alerts: [],
  currently: {},
  daily: {},
  default: {},
  flags: {},
  hourly: {},
  latitude: 0,
  longitude: 0,
  connections: [],
}

const getters = {
  currently: state => state.currently,
  daily: state => state.daily,
  latitude: state => state.latitude,
  longitude: state => state.longitude,
}

const actions = {
  [OPEN_CONNECTION]({ commit }, params) {
    weatherService.addConnection('FromAPI', data =>
      commit(UPDATE_WEATHER, data)
    )
  },
  [CLOSE_CONNECTION]({ commit, dispatch }, params) {
    weatherService.closeConnection('FromAPI')
  },
}

const mutations = {
  [UPDATE_WEATHER]: function(state, data) {
    Object.keys(data).forEach(key => (state[key] = data[key]))
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
