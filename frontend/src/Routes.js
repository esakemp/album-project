import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const FrontPage = React.lazy(() => import('./components/FrontPage'))
const AlbumPage = React.lazy(() => import('./components/AlbumPage'))

const Routes = () => (
  <Suspense fallback={<CircularProgress />}>
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/albums" component={AlbumPage} />
    </Switch>
  </Suspense>
)

export default Routes
