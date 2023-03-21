// import { useEffect } from 'react';
// import { getData } from './api/API';
import React from 'react'
import './App.css'
import Menu from './components/Menu'
import Products from './components/Products'

function App () {
  // useEffect(() => {
  //   getData()
  // })
  return (
    <div className="App">
      <Menu />
      <Products />
    </div>
  )
}

export default App
