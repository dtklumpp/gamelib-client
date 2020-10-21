import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import GameList from '../pages/GameList'
import GameShow from '../pages/GameShow'

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/games/:id' component={ GameShow } />
      <Route path='/games' component={ GameList } />
    </Switch>
  )
}

export default Routes;
