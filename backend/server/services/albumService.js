const { Album, Band } = require('../../database/models')

const getAlbums = () =>
  Album.findAll({
    include: {
      model: Band,
      attributes: ['id', 'band_name'],
      through: {
        attributes: [],
      },
    },
  })

module.exports = {
  getAlbums,
}
