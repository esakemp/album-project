import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const FrontPage = React.lazy(() => import('./components/FrontPage'))
const AlbumPage = React.lazy(() => import('./components/AlbumPage'))

const Routes = () => (
  <Suspense fallback={<div>load</div>}>
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/albums" component={AlbumPage} />
    </Switch>
  </Suspense>
)

export default Routes
