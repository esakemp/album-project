const { Band, Album } = require('../../database/models')

const getBands = () => Band.findAll({})

const getBandsAlbums = () => Band.findAll({ include: Album })

module.exports = {
  getBands,
  getBandsAlbums,
}
