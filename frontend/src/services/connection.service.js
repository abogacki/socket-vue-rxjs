import socketIOClient from 'socket.io-client'

class ConnectionService {
  endpoint = 'http://192.168.208.25:4001'
  constructor(latitude, longitude) {
    this.socket = socketIOClient(this.endpoint, {
      query: `latitude=${latitude}&longitude=${longitude}`,
    })
  }

  openConnection(event, fn) {
    this.socket.on(event, fn)
  }

  closeConnection(event) {
    this.socket.off(event)
    this.socket.close()
  }
}

export default ConnectionService
