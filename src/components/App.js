import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { browserHistory } from '../store'
import { hot } from 'react-hot-loader'

import TechRadarShowPage from './pages/TechRadarShowPage'
import TechRadarEditPage from './pages/TechRadarEditPage'

const App = () => (
  <ConnectedRouter history={browserHistory}>
    <Switch>
      <Route path="/edit" component={TechRadarEditPage}/>
      <Route path="/" component={TechRadarShowPage}/>
    </Switch>
  </ConnectedRouter>
)

export default hot(module)(App)
