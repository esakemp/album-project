const Sequelize = require('sequelize')
const { Op } = Sequelize
const { Band, Album, AlbumArtist, Genre } = require('../../database/models')
const { sequelize: sequelizeConnection } = require('../../database/connection')

const getBands = () =>
  Band.findAll({
    attributes: {
      include: [
        'band.id',
        'band.band_name',
        [sequelizeConnection.fn('COUNT', sequelizeConnection.col('albumartists.album_id')), 'albumCount'],
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

const getBandsAlbums = band_id =>
  Band.find({
    include: {
      model: Album,
      through: {
        attributes: [],
      },
      include: {
        model: Genre,
        through: {
          attributes: [],
        },
      },
    },
    where: {
      band_id: { [Op.eq]: band_id },
    },
  })

module.exports = {
  getBands,
  getBandsAlbums,
}
