import WeatherService from '@/services/weather.service'
import get from 'lodash/get'

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

const state = {
  weather: {
    byPosition: {
      '43.7695,11.2558': {
        currently: {},
        daily: {},
      },
    },
    allPositions: [],
  },
  weatherServices: [],
}

const query = (state, latitude, longitude, ...rest) =>
  get(state, ['weather', 'byPosition', `${latitude},${longitude}`, ...rest])

const getters = {
  [GET_CURRENT_BY_POSITION]: state => ({ latitude, longitude }) => {
    const result = query(state, latitude, longitude, 'currently')
    return result
  },
  [GET_DAILY_BY_POSITION]: state => ({ latitude, longitude }) =>
    query(state, latitude, longitude, 'daily'),
  [GET_SERVICE_BY_POSITION]: state => ({ latitude, longitude }) =>
    state.weatherServices.find(
      ws => ws.latitude == latitude && ws.longitude == longitude
    ),
}

const actions = {
  [OPEN_CONNECTION]({ commit, state }, { latitude, longitude }) {
    let _service = get(
      state,
      `weather.weatherServices[${latitude},${longitude}]`
    )
    if (!_service) {
      _service = new WeatherService(latitude, longitude)
      commit(CREATE_SERVICE, _service)
    }
    _service.openConnection('FromAPI', data => {
      commit(UPDATE_WEATHER, data)
    })
  },
  [CLOSE_CONNECTION]({ commit, dispatch }, params) {
    weatherService.closeConnection('FromAPI')
  },
}

const mutations = {
  [UPDATE_WEATHER](state, data) {
    const { latitude, longitude } = data
    state.weather.byPosition[`${latitude},${longitude}`] = data

    // if position didn't exist
    state.weather.allPositions.filter(
      position => position == `${latitude},${longitude}`
    ).length == 0
      ? state.weather.allPositions.push(`${latitude},${longitude}`)
      : null
  },
  [CREATE_SERVICE](state, service) {
    state.weatherServices.push({
      service,
      latitude: service.latitude,
      longitude: service.longitude,
    })
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
