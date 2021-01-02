import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries } from 'react-vis'

import { getGenres } from '../../redux/genres'

const GenreGraph = () => {
  const dispatch = useDispatch()
  const { genres, pending } = useSelector(({ genres }) => ({
    genres: genres.data
      .sort((a, b) => Number(b.count) - Number(a.count))
      .slice(0, 10)
      .map(genre => ({ x: genre.name, y: Number(genre.count) })),
    pending: genres.pending,
  }))
  useEffect(() => {
    if (genres.length < 1) dispatch(getGenres())
  }, [])
  if (pending || genres.length < 1) return null
  return (
    <XYPlot margin={{ bottom: 100 }} xType="ordinal" width={500} height={500}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45} />
      <YAxis />
      <VerticalBarSeries data={genres} />
    </XYPlot>
  )
}

export default GenreGraph
