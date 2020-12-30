const { Band, Album, AlbumArtist } = require('../../database/models')
const { sequelize } = require('../../database/connection')

const getBands = () =>
  Band.findAll({
    attributes: {
      include: [
        'band.id',
        'band.band_name',
        [sequelize.fn('COUNT', sequelize.col('albumartists.album_id')), 'albumCount'],
      ],
    },
    include: [
      {
        model: AlbumArtist,
        attributes: [],
      },
    ],
    group: ['band.id'],
  })

const getBandsAlbums = () =>
  Band.findAll({
    include: {
      model: Album,
      through: {
        attributes: [],
      },
    },
  })

module.exports = {
  getBands,
  getBandsAlbums,
}
