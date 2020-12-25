import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Routes from './Routes'

const history = createBrowserHistory()

export default () => {
  const padding = { padding: 5 }
  return (
    <div>
      <Router history={history}>
        <div>
          <Link style={padding} to="/">
            home
          </Link>
          <Link style={padding} to="/albums">
            Albums
          </Link>
        </div>
        <Routes />
      </Router>
    </div>
  )
}
