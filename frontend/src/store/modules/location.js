const store = {
  locations: {
    byId: {},
    allIds: [],
  },
}

const getters = {
  locationByPosition: state => ({latitude, longitude}) => state.locations.byPosition[]
}
const actions = {}
const mutations = {}

export default { getters, actions, mutations, store }
