import React from 'react'

import GenreGraph from '../GenreGraph'

const FrontPage = () => (
  <>
    <div>
      <h1>A simple discogs API app</h1>
      <div>
        <h2>top 10 genres</h2>
        <GenreGraph />
      </div>
    </div>
  </>
)

export default FrontPage
