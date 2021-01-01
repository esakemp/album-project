// const sequelize = require('sequelize')
const { Genre } = require('../../database/models')

const getGenreCounts = () =>
  Genre.count({
    attributes: ['name'],
    distinct: 'id',
    group: 'name',
  })

module.exports = {
  getGenreCounts,
}
