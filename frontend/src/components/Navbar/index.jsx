import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <>
    <AppBar style={{ background: '#556B2F' }}>
      <Toolbar>
        <Button component={Link} to="/">
          Frontpage
        </Button>
        <Button component={Link} to="/bands">
          Bands
        </Button>
        <Button component={Link} to="/albums">
          Albums
        </Button>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </>
)

export default Navbar
