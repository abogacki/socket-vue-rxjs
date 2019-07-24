import socketIOClient from 'socket.io-client'

class WeatherService {
  endpoint = 'http://192.168.208.25:4001'
  socket = socketIOClient(this.endpoint)

  addConnection(event, fn) {
    this.socket.on(event, fn)
  }

  closeConnection(event) {
    this.socket.off(event)
  }
}

// shouldn't be singleton
const weatherService = new WeatherService()

export default weatherService
