import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Details from './pages/Details'
import Home from './pages/Home'

function App () {
  document.title = 'Marvel Comics Store'
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/details/:id' component={Details} />
    </Switch>
  )
}

export default App
