// const sequelize = require('sequelize')
const { Genre } = require('../../database/models')

const getGenres = () =>
  Genre.count({
    attributes: ['name'],
    distinct: 'id',
    group: 'name',
  })

module.exports = {
  getGenres,
}
