import React from 'react'
import { useHistory } from 'react-router-dom'
import '../style/Menu.css'
import Cart from '../images/cart.svg'
import Light from '../images/light.svg'
// import Dark from '../images/dark.svg'

function Menu () {
  const history = useHistory()

  const products = () => {
    history.push('/')
  }

  const switchMode = () => {
    console.log('switch dark/light mode')
  }

  const cart = () => {
    history.push('/cart')
  }

  return (
    <nav>
      <div className='navbar-left'>
        <button className='btn-produtos' onClick={ products }>Produtos</button>
      </div>
      <div className='navbar-right'>
        <div className='space'/>
        <button onClick={ switchMode }><img src={Light} alt="Light Mode"/></button>
        <button onClick={ cart }><img src={Cart} alt="Carrinho"/></button>
      </div>
    </nav>
  )
}

export default Menu
