const router = require('express').Router()
const { getBands, getBandsAlbums } = require('../services/bandService')

router.get('/api/bands', async (req, res) => {
  const data = await getBands()
  res.json(data)
})

router.get('/api/bands/:id', async (req, res) => {
  const {
    params: { id },
  } = req
  const data = await getBandsAlbums(id)
  res.json(data)
})

module.exports = router
