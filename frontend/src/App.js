import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import Routes from './Routes'

const App = () => (
  <div>
    <Router>
      <AppBar style={{ background: '#556B2F' }}>
        <Toolbar>
          <Button component={Link} to="/">
            Frontpage
          </Button>
          <Button component={Link} to="/albums">
            Albums
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Routes />
    </Router>
  </div>
)

export default App
