const router = require('express').Router()
const { getAlbums, getAlbumAdditionDates } = require('../services/albumService')

router.get('/api/albums', async (req, res) => {
  const data = await getAlbums()
  res.json(data)
})

router.get('/api/albumdates', async (req, res) => {
  const data = await getAlbumAdditionDates()
  res.json(data)
})

module.exports = router
