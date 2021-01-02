import React from 'react'
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'

import Routes from './Routes'

const App = () => (
  <div style={{ width: '50%', margin: '0 auto', fontFamily: 'monospace', textAlign: 'center' }}>
    <Router>
      <Navbar />
      <Routes />
    </Router>
  </div>
)

export default App
