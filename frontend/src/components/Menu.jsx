import React from 'react';
import { useHistory } from 'react-router-dom';
import Cart from '../images/cart.svg';
import '../style/components/Menu.css';

function Menu () {
  const history = useHistory();

  const products = () => {
    history.push('/');
  }

  const cart = () => {
    history.push('/cart');
  }

  return (
    <nav>
      <article className='navbar-left'>
        <button className='btn-produtos btn-menu' onClick={ products }>Produtos</button>
      </article>
      <aside className='navbar-right'>
        <div className='space'/>
        <button className='btn-menu' onClick={ cart }>
          <img src={Cart} alt="Carrinho"/>
        </button>
      </aside>
    </nav>
  )
}

export default Menu;
