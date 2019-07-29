import socketIOClient from 'socket.io-client'

class ConnectionService {
  endpoint = 'http://192.168.208.25:4001'
  constructor(latitude, longitude) {
    this.url = `${this.endpoint}/${latitude},${longitude}`
    this.socket = socketIOClient(this.endpoint)
  }

  openConnection(event, fn) {
    console.log(event, fn)

    this.socket.on(event, fn)
  }

  closeConnection(event) {
    this.socket.off(event)
  }
}

export default ConnectionService
