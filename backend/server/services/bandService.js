const { Band, Album } = require('../../database/models')

const getBands = () => Band.findAll({})

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
