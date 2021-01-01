const router = require('express').Router()
const { getGenreCounts } = require('../services/genreService')

router.get('/api/genrecounts', async (req, res) => {
  const data = await getGenreCounts()
  res.json(data)
})

module.exports = router
