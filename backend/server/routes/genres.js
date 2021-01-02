const router = require('express').Router()
const { getGenres } = require('../services/genreService')

router.get('/api/genres', async (req, res) => {
  const data = await getGenres()
  res.json(data)
})

module.exports = router
