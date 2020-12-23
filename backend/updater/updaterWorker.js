const axios = require('axios')
const { Band, Album, AlbumArtist } = require('../database/models')

const startUpdater = async () => {
  console.log('Fetching data')
  try {
    const res = await axios.get(
      'https://api.discogs.com/users/naamakala/collection/folders/0/releases?page=1&per_page=400',
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
          date_added: album.date_added,
          id: album.id,
          resource_url: album.basic_information.resource_url,
        }
        if (!acc.albums.find((alb) => alb.id === album.id)) {
          acc.albums.push(newAlbum)
        }

        album.basic_information.artists.forEach((artist) => {
          const newArtist = {
            id: artist.id,
            band_name: artist.name,
            resource_url: artist.resource_url,
          }
          if (!acc.bands.find((art) => art.id === artist.id)) {
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
      { bands: [], albums: [], albumartists: [] },
    )
    console.log('Inserting data to db')
    await Band.bulkCreate(formattedList.bands, { ignoreDuplicates: true })
    await Album.bulkCreate(formattedList.albums, { ignoreDuplicates: true })
    console.log(formattedList.albumartists)
    await AlbumArtist.bulkCreate(formattedList.albumartists)
    console.log('Updater finished')
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  startUpdater,
}
