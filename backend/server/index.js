const express = require('express')
const cors = require('cors')
const bands = require('./routes/bands')
const albums = require('./routes/albums')
const { initializeDatabaseConnection } = require('../database/connection')

initializeDatabaseConnection()
  .then(() => {
    const app = express()

    app.use(cors())
    // app.use(bodyParser.json())

    let BASE_URL = ''
    app.use(BASE_URL, bands)
    app.use(BASE_URL, albums)

    app.get('*', async (req, res) => {
      const results = { error: 'unknown endpoint' }
      res.status(404).json(results)
    })

    const PORT = '8080'
    const server = app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`))
    process.on('SIGTERM', () => {
      server.close(() => {
        console.log('Process terminated')
      })
    })
  })
  .catch(e => {
    process.exitCode = 1
    console.log(e)
  })
