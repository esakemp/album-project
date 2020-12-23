const { Album } = require('../../database/models')

const getAlbums = () => Album.findAll({})

module.exports = {
  getAlbums,
}
