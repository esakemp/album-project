import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { XYPlot, XAxis, VerticalBarSeries } from 'react-vis'

import { getGenres } from '../../redux/genres'

const GenreGraph = () => {
  const dispatch = useDispatch()
  const { topGenres, rarestGenres, allGenreNames, pending } = useSelector(({ genres }) => {
    const sortedAndFormattedGenres = genres.data
      .sort((a, b) => Number(b.count) - Number(a.count))
      .map(genre => ({ x: genre.name, y: Number(genre.count) }))
    return {
      topGenres: sortedAndFormattedGenres.slice(0, 10),
      rarestGenres: sortedAndFormattedGenres.slice(
        sortedAndFormattedGenres.length - 10,
        sortedAndFormattedGenres.length
      ),
      allGenreNames: genres.data.map(genre => genre.name).sort(),
      pending: genres.pending,
    }
  })

  useEffect(() => {
    if (topGenres.length < 1) dispatch(getGenres())
  }, [])
  if (pending || topGenres.length < 1) return null

  return (
    <>
      <XYPlot margin={{ bottom: 100 }} xType="ordinal" width={500} height={500}>
        <XAxis tickLabelAngle={-45} />
        <VerticalBarSeries data={topGenres} />
      </XYPlot>
      <h2>rarest genres</h2>
      <XYPlot margin={{ bottom: 120 }} xType="ordinal" width={500} height={500}>
        <XAxis tickLabelAngle={-45} />
        <VerticalBarSeries data={rarestGenres} />
      </XYPlot>
      <h2>all genres in collection</h2>
      {allGenreNames.join(' - ')}
    </>
  )
}

export default GenreGraph
