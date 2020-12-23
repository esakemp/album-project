const router = require('express').Router()
const { getAlbums } = require('../services/albumService')

router.get('/api/albums', async (req, res) => {
  const data = await getAlbums()
  res.json(data)
})

module.exports = router
