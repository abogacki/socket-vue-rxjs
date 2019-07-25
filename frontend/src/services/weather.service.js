import socketIOClient from 'socket.io-client'

class WeatherService {
  endpoint = 'http://192.168.208.25:4001'
  constructor(latitude, longitude, params) {
    this.url = `${this.endpoint}/${latitude},${longitude}?${params}`
  }
  socket = socketIOClient(this.endpoint)

  openConnection(event, fn) {
    this.socket.on(event, fn)
  }

  closeConnection(event) {
    this.socket.off(event)
  }
}

export default WeatherService
