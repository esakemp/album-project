import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis'

import { getAlbumAdditionDates } from '../../redux/albums'

const DateGraph = () => {
  const dispatch = useDispatch()
  const { albumdates, pending } = useSelector(({ albums }) => ({
    albumdates: albums.data?.dates.reduce((acc, curr) => {
      if (acc.length < 1) {
        acc.push({ x: new Date(curr.date_added), y: Number(curr.count) })
      } else {
        acc.push({ x: new Date(curr.date_added), y: acc[acc.length - 1].y + Number(curr.count) })
      }
      return acc
    }, []),
    pending: albums.pending,
  }))

  useEffect(() => {
    if (albumdates.length < 1) dispatch(getAlbumAdditionDates())
  }, [])

  if (pending || albumdates.length < 1) return null

  return (
    <XYPlot xType="time" width={500} height={300}>
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45} />
      <YAxis />
      <LineSeries data={albumdates} />
    </XYPlot>
  )
}

export default DateGraph
