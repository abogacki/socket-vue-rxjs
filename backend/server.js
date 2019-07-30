import express from 'express'
import http from 'http'
import socketIo from 'socket.io'
import axios from 'axios'
import index from './routes/index'
import 'dotenv/config'

const port = process.env.PORT || 4001

const app = express()
app.use(index)

const server = http.createServer(app)

const io = socketIo(server)

let interval

io.on('connect', socket => {
  const { latitude, longitude } = socket.handshake.query
  const url = getDarkSkyUrl(latitude, longitude, 'si')

  if (interval) {
    clearInterval(interval)
  }

  console.log('Client connected')

  const INTERVAL = 1000 * 60 * 5

  // interval = setInterval(() => {}, INTERVAL)

  // getApiAndEmit(socket, url)

  socket.on('disconnect', () => {
    console.log('Client disconenct')
  })
})

const getDarkSkyUrl = (latitude, longitude, units) => {
  const baseUrl = 'https://api.darksky.net/forecast'
  const url = `${baseUrl}/${
    process.env.DARK_SKY_KEY
  }/${latitude},${longitude}?units=${units}`
  return url
}

const getApiAndEmit = async (socket, url) => {
  try {
    const res = await axios.get(url)
    socket.emit('FromAPI', res.data)
  } catch (error) {
    socket.emit(`Error`, error)
  }
}

server.listen(port, () => console.log(`Listening on port ${port}`))
