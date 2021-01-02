import React from 'react'
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'

import Routes from './Routes'

const App = () => (
  <div style={{ margin: 'auto', fontFamily: 'monospace', width: '50vh' }}>
    <Router>
      <Navbar />
      <Routes />
    </Router>
  </div>
)

export default App
