const bands = require('./routes/bands')
const albums = require('./routes/albums')
const genres = require('./routes/genres')

module.exports = (app, url) => {
  app.use(url, bands), app.use(url, albums), app.use(url, genres)
}
