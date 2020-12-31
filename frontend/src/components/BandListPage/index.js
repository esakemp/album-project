import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, ListItemText, CircularProgress } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { getBands } from '../../redux/bands'

const BandPage = () => {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const { bands, pending } = useSelector(({ bands }) => ({
    bands: bands.data.sort((a, b) => a.band_name > b.band_name),
    pending: bands.pending,
  }))
  useEffect(() => {
    if (bands.length < 1) {
      dispatch(getBands())
    }
  }, [])

  const handleChange = (event, value) => {
    setPage(value)
  }

  const bandRows = bands.slice((page - 1) * 10, page * 10).map(band => (
    <ListItem key={band.id}>
      <ListItemText
        primary={band.band_name}
        secondary={`${band.albumCount} album${band.albumCount > 1 ? 's' : ''} in collection`}
      />
    </ListItem>
  ))

  return (
    <div>
      <h2 style={{ fontFamily: 'monospace' }}> bands </h2>
      <Pagination count={10} page={page} onChange={handleChange} />
      {pending && bands.length < 1 && <CircularProgress />}
      <List>{bandRows}</List>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  )
}

export default BandPage
