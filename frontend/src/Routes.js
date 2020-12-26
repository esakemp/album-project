import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const FrontPage = React.lazy(() => import('./components/FrontPage'))
const AlbumListPage = React.lazy(() => import('./components/AlbumListPage'))
const BandListPage = React.lazy(() => import('./components/BandListPage'))

const Routes = () => (
  <Suspense fallback={<CircularProgress />}>
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/albums" component={AlbumListPage} />
      <Route exact path="/bands" component={BandListPage} />
    </Switch>
  </Suspense>
)

export default Routes
