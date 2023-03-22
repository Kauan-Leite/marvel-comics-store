import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={ store }>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
)
