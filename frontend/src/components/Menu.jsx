import React from 'react'
import { useHistory } from 'react-router-dom'
import Cart from '../images/cart.svg'
import Light from '../images/light.svg'
// import Dark from '../images/dark.svg'
import '../style/components/Menu.css'

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
      <article className='navbar-left'>
        <button className='btn-produtos' onClick={ products }>Produtos</button>
      </article>
      <aside className='navbar-right'>
        <div className='space'/>
        <button onClick={ switchMode }><img src={Light} alt="Light Mode"/></button>
        <button onClick={ cart }><img src={Cart} alt="Carrinho"/></button>
      </aside>
    </nav>
  )
}

export default Menu
