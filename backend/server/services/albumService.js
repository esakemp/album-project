const { Album, Band } = require('../database/models')

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

const getAlbumAdditionDates = () =>
  Album.count({
    attributes: ['date_added'],
    distinct: 'id',
    group: ['date_added'],
  })

module.exports = {
  getAlbums,
  getAlbumAdditionDates,
}
