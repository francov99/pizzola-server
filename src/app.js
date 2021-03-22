const express = require('express')
const mongoose = require('./mongoose')
const routes = require('./routes')
const config = require('../config.json')

const startServer = () => {
  const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE", "OPTIONS");
    res.header('Access-Control-Allow-Headers', '*')
    next()
  }

  const app = express()
  // Load MongoDB
  mongoose()

  // Middlewares
  app.use(express.json())
  app.use(allowCrossDomain)
  app.use('/menu', routes)
  app.get('/status', (req, res) => {
    res.status(200).json({ status: 200 }).end()
  })

  // Listening express PORT
  const PORT = config.port
  app.listen(PORT, () => {
    console.log(`Pizzola server listening on port: ${PORT}`)
  })
}

startServer()
