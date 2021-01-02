import React from 'react'

import GenreGraph from '../GenreGraph'
import DateGraph from '../DateGraph'

const FrontPage = () => (
  <>
    <div style={{ width: 'min-content' }}>
      <h1>A simple discogs API app</h1>
      <div>
        <h2>album accumulation</h2>
        <DateGraph />
        <h2>top 10 genres</h2>
        <GenreGraph />
      </div>
    </div>
  </>
)

export default FrontPage
