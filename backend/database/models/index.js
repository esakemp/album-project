const Sequelize = require('sequelize')
const { sequelize } = require('../connection')

const Band = sequelize.define(
  'band',
  {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    band_name: { type: Sequelize.STRING },
    resource_url: { type: Sequelize.STRING },
    created_at: { type: Sequelize.DATE },
    updated_at: { type: Sequelize.DATE },
  },
  {
    underscored: true,
  },
)

const Album = sequelize.define(
  'album',
  {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: { type: Sequelize.STRING },
    date_added: { type: Sequelize.DATE },
    year: { type: Sequelize.INTEGER },
    resource_url: { type: Sequelize.STRING },
    created_at: { type: Sequelize.DATE },
    updated_at: { type: Sequelize.DATE },
  },
  {
    underscored: true,
  },
)
const AlbumArtist = sequelize.define(
  'albumartist',
  {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    album_id: {
      type: Sequelize.INTEGER,
    },
    band_id: {
      type: Sequelize.INTEGER,
    },
    created_at: { type: Sequelize.DATE },
    updated_at: { type: Sequelize.DATE },
  },
  {
    underscored: true,
  },
)

Band.belongsToMany(Album, { through: AlbumArtist })
Album.belongsToMany(Band, { through: AlbumArtist })
Band.hasMany(AlbumArtist)
Album.hasMany(AlbumArtist)
AlbumArtist.belongsTo(Band)
AlbumArtist.belongsTo(Album)

module.exports = {
  Band,
  Album,
  AlbumArtist,
}
