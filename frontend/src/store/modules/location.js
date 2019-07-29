import { Location } from '@/models'

const locations = {
  state: {
    fetching: false,
    error: [],
  },
  actions: {
    fetch({ state, commit }) {
      console.log(state, commit)
    },
  },
  mutations: {
    initialiseStore(state) {
      console.log(state)
    },
  },
}

export default locations
