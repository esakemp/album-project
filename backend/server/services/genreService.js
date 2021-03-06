const { Genre } = require('../database/models')

const getGenres = async () => {
  const genreRows = await Genre.findAll({})

  const albumGenres = genreRows.reduce((acc, curr) => {
    if (!acc[curr.album_id]) {
      acc[curr.album_id] = [curr.name]
    } else {
      acc[curr.album_id].push(curr.name)
    }
    return acc
  }, {})

  const genreCounts = Object.keys(albumGenres).reduce((acc, curr) => {
    albumGenres[curr].forEach(genre => {
      if (!acc[genre]) {
        acc[genre] = 1 / albumGenres[curr].length
      } else {
        acc[genre] += 1 / albumGenres[curr].length
      }
    })
    return acc
  }, {})

  const formattedGenrecounts = Object.keys(genreCounts).map(genre => ({
    name: genre,
    count: genreCounts[genre],
  }))
  return formattedGenrecounts
}

module.exports = {
  getGenres,
}
