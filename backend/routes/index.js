import express from 'express'

const router = express.Router()

module.exports = function(app, io) {
  app.get('/', function(req, res) {
    res.send('working')
  })
}
