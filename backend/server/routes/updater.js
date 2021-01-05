const router = require('express').Router()
const { startUpdater } = require('../updaterWorker')
router.get('/api/updater', async (req, res) => {
  const response = await startUpdater()
  res.json(response)
})
