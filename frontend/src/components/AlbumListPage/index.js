import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, ListItemText, CircularProgress } from '@material-ui/core'
import { getAlbums } from '../../redux/albums'

const AlbumPage = () => {
  const dispatch = useDispatch()
  const { albums, pending } = useSelector(({ albums }) => ({
    albums: albums.data.sort((a, b) => a.title > b.title),
    pending: albums.pending,
  }))
  useEffect(() => {
    dispatch(getAlbums())
  }, [])

  const albumRows = albums.map(album => (
    <ListItem key={album.id}>
      <ListItemText primary={album.title} secondary={album.bands.map(band => band.band_name).join(' / ')} />
    </ListItem>
  ))
  return (
    <div>
      <h2 style={{ fontFamily: 'monospace' }}> Bands </h2>
      {pending && <CircularProgress />}
      <List>{albumRows}</List>
    </div>
  )
}

export default AlbumPage
