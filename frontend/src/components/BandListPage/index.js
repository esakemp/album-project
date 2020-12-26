import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, ListItemText, CircularProgress } from '@material-ui/core'
import { getBands } from '../../redux/bands'

const BandPage = () => {
  const dispatch = useDispatch()
  const { bands, pending } = useSelector(({ bands }) => ({
    bands: bands.data.sort((a, b) => a.band_name > b.band_name),
    pending: bands.pending,
  }))
  useEffect(() => {
    dispatch(getBands())
  }, [])
  console.log(bands)
  const bandRows = bands.map(band => (
    <ListItem key={band.id}>
      <ListItemText primary={band.band_name} />
    </ListItem>
  ))
  return (
    <div>
      <h2 style={{ fontFamily: 'monospace' }}> bands </h2>
      {pending && <CircularProgress />}
      <List>{bandRows}</List>
    </div>
  )
}

export default BandPage
