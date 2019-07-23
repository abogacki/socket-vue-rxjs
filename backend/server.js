const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const axios = require('axios')

const port = process.env.PORT || 4001
const index = require('./routes/index')

const app = express()
app.use(index)
const server = http.createServer(app)

const io = socketIo(server)

let interval

io.on('connect', socket => {
  if (interval) {
    clearInterval(interval)
  }
  console.log('Client connected')
  interval = setInterval(() => getApiAndEmit(socket), 10000)

  socket.on('disconnect', () => {
    console.log('Client disconenct')
  })
})

const darkSkyUrl =
  'https://api.darksky.net/forecast/004e080b7d25e328f7d2f97c96c7d7ea/43.7695,11.2558'

const getApiAndEmit = async socket => {
  try {
    const res = await axios.get(darkSkyUrl)
    socket.emit('FromAPI', res.data)
  } catch (error) {
    console.error(`Error: ${error.code}; ${error.message}`)
    throw error
  }
}

server.listen(port, () => console.log(`Listening on port ${port}`))
