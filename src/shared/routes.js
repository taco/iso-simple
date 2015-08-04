import { Route, DefaultRoute } from 'react-router'
import React from 'react'

import AppHandler from './components/AppHandler'
import ListHandler from './components/ListHandler'
import CreateHandler from './components/CreateHandler'
import EditHandler from './components/EditHandler'

export default (  
  <Route>
  	<DefaultRoute handler={ AppHandler } />
  	<Route handler={ ListHandler } path="/list" />
  	<Route handler={ CreateHandler } path="/create" />
  	<Route handler={ EditHandler } path="/edit/:mealId" />
  	<Route path="/favicon.ico" />
  </Route>
)