import socketIOClient from 'socket.io-client'

class ConnectionService {
  endpoint = 'http://192.168.208.25:4001'
  connections = {}

  constructor() {
    this.socket = socketIOClient(this.endpoint)
  }

  openConnection(eventType, callback) {
    this.socket.on(eventType, callback)
    this.connections[eventType] = callback
  }

  closeConnection(eventType) {
    this.socket.off(eventType)
    this.socket.close()
  }

  emitEvent(eventType, payload) {
    this.socket.emit(eventType, payload)
  }
}

export default ConnectionService
