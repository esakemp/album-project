const axios = require('axios')
const moment = require('moment')
const { Band, Album, AlbumArtist, Genre } = require('./database/models')

const startUpdater = async () => {
  console.log('Fetching data')
  try {
    const res = await axios.get(
      'https://api.discogs.com/users/naamakala/collection/folders/0/releases?page=1&per_page=400'
    )
    console.log('Data fetched from discogs')

    const data = res.data

    console.log('Starting data formatting')
    const formattedList = data.releases.reduce(
      (acc, curr) => {
        const album = curr
        const newAlbum = {
          title: album.basic_information.title,
          year: album.basic_information.year,
          date_added: moment(album.date_added).calendar(),
          id: album.id,
          resource_url: album.basic_information.resource_url,
        }
        if (!acc.albums.find(alb => alb.id === album.id)) {
          acc.albums.push(newAlbum)
        }

        album.basic_information.styles.forEach(genre => {
          const newGenre = {
            album_id: album.id,
            name: genre,
          }
          acc.genres.push(newGenre)
        })

        album.basic_information.artists.forEach(artist => {
          const newArtist = {
            id: artist.id,
            band_name: artist.name,
            resource_url: artist.resource_url,
          }
          if (!acc.bands.find(art => art.id === artist.id)) {
            acc.bands.push(newArtist)
          }
          const newAlbumArtist = {
            album_id: album.id,
            band_id: artist.id,
          }
          acc.albumartists.push(newAlbumArtist)
        })
        return acc
      },
      { bands: [], albums: [], albumartists: [], genres: [] }
    )

    console.log('Inserting data to db')

    const { bands, albums, albumartists, genres } = formattedList

    await Band.bulkCreate(bands, { ignoreDuplicates: true })
    await Album.bulkCreate(albums, { ignoreDuplicates: true })
    await AlbumArtist.bulkCreate(albumartists)
    await Genre.bulkCreate(genres)

    console.log('Updater finished')
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  startUpdater,
}
