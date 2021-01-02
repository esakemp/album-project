import React from 'react'

import GenreGraph from '../GenreGraph'
import DateGraph from '../DateGraph'

const FrontPage = () => (
  <>
    <div>
      <h1>A simple discogs API app</h1>
      <div>
        <h2>top 10 genres</h2>
        <GenreGraph />
        <h2>album accumulation</h2>
        <DateGraph />
      </div>
    </div>
  </>
)

export default FrontPage
