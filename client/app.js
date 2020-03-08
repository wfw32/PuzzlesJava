import React from 'react'

import {Navigation, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
