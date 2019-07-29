const weathers = {
  state: {
    fetching: false,
    error: [],
  },
  mutations: {
    setConnectionServiceCoordinates(state, coordinates) {
      state.connectionService.setCoordinates(coordinates)
    },
  },
}

export default weathers
