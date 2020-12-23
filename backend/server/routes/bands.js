const router = require('express').Router()
const { getBands, getBandsAlbums } = require('../services/bandService')

router.get('/api/artists', async (req, res) => {
  const data = await getBands()
  res.json(data)
})

router.get('/api/artistalbum', async (req, res) => {
  const data = await getBandsAlbums()
  res.json(data)
})

module.exports = router
