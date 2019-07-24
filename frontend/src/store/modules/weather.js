import weatherService from '@/_services/weather.service'
import socketIOClient from 'socket.io-client'

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
  openConnection({ dispatch }, params) {
    weatherService.addConnection('FromAPI', data =>
      dispatch('onDataReceive', data)
    )
  },
  closeConnection({ commit, dispatch }, params) {
    weatherService.closeConnection('FromAPI')
  },
  onDataReceive({ commit }, data) {
    commit('updateWeather', data)
  },
}
const mutations = {
  updateWeather: (state, data) => {
    Object.keys(data).forEach(key => (state[key] = data[key]))
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
