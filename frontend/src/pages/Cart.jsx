import React from 'react'
import Menu from '../components/Menu'
import CartProduct from '../components/CartProduct'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';


function Cart (props) {
  const { cart, totalPrice, dispatch } = props
  document.title = 'Carrinho | Marvel Comics Store'

  return (
    <section>
      <Menu />
      {
        cart.length > 0
          ? <CartProduct cart={ cart } totalPrice={totalPrice} dispatch={dispatch} />
          : <h1 className='empty-cart'>Carrinho Vazio!</h1>
      }
    </section>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
  totalPrice: state.cartReducer.totalValue
})

Cart.propTypes = {
  cart: PropTypes.array,
  totalPrice: PropTypes.number,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(Cart)
