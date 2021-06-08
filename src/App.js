import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Profile from './components/Profile'
import Settings from './components/Settings'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/settings' component={Settings} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>

    )
  }

}
export default App