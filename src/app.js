const express = require('express')
const mongoose = require('./mongoose')
const routes = require('./routes')

const startServer = () => {
  const app = express()
  // DOTENV
  require('dotenv').config()
  // Load MongoDB
  mongoose()

  // Middlewares
  app.use(express.json())
  app.use('/menu', routes)
  app.get('/status', (req, res) => {
    res.status(200).json({ status: 200 }).end()
  })

  // Listening express PORT
  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Pizzola server listening on port: ${PORT}`)
  })
}

startServer()
