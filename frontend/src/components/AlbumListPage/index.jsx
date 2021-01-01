import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, ListItemText, CircularProgress } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { getAlbums } from '../../redux/albums'

const AlbumPage = () => {
  const [page, setPage] = useState(1)

  const dispatch = useDispatch()
  const { albums, pending } = useSelector(({ albums }) => ({
    albums: albums.data.sort((a, b) => {
      // Need to sort manually since browsers act differently
      if (a.title > b.title) return 1
      if (b.title > a.title) return -1
      return 0
    }),
    pending: albums.pending,
  }))
  useEffect(() => {
    if (albums.length < 1) {
      dispatch(getAlbums())
    }
  }, [])

  const handleChange = (event, value) => {
    setPage(value)
  }

  const albumRows = albums.slice((page - 1) * 10, page * 10).map(album => (
    <ListItem key={album.id}>
      <ListItemText primary={album.title} secondary={album.bands.map(band => band.band_name).join(' / ')} />
    </ListItem>
  ))
  return (
    <div>
      <h2 style={{ fontFamily: 'monospace' }}> albums </h2>
      <Pagination count={Math.ceil(albums.length / 10)} page={page} onChange={handleChange} />
      {pending && albums.length < 1 && <CircularProgress />}
      <List>{albumRows}</List>
      <Pagination count={Math.ceil(albums.length / 10)} onChange={handleChange} />
    </div>
  )
}

export default AlbumPage
