import socketIOClient from 'socket.io-client'

export default class WeatherService {
  constructor(endpoint) {
    this.endpoint = endpoint
    this.createSocket()
  }

  createSocket() {
    this.socket = socketIOClient(this.endpoint)
  }

  addConnection(event, fn) {
    this.socket.on(event, fn)
  }

  closeConnection(event) {
    this.socket.off(event)
  }
}
