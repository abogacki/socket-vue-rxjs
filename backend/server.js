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
  if (interval) {
    clearInterval(interval)
  }
  console.log('Client connected')
  interval = setInterval(() => getApiAndEmit(socket), 5000)

  socket.on('disconnect', () => {
    console.log('Client disconenct')
  })
})

const darkSkyUrl =
  'https://api.darksky.net/forecast/004e080b7d25e328f7d2f97c96c7d7ea/43.7695,11.2558?units=si'

const getDarkSkyUrl = (latitude, longitude, units) => {
  const baseUrl = 'https://api.darksky.net/forecast'
  const url = `${baseUrl}/${
    process.env.DARK_SKY_KEY
  }/${latitude},${longitude}?units=${units}`
  return url
}

const getApiAndEmit = async socket => {
  try {
    // console.log(import);
    // const res = await axios.get(darkSkyUrl)
    const data = await import('./_mocks/weatherResponse.json')
    const res = {
      data,
    }

    socket.emit('FromAPI', res.data)
  } catch (error) {
    socket.emit(`Error`, error)
  }
}

server.listen(port, () => console.log(`Listening on port ${port}`))
