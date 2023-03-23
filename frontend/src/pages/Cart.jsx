/* eslint-disable react/prop-types */
import React from 'react'
import Menu from '../components/Menu'
import CartProduct from '../components/CartProduct'
import { connect } from 'react-redux'

function Cart (props) {
  const { cart, totalPrice, dispatch } = props
  return (
    <section>
      <Menu />
      {
        cart.length > 0 ? <CartProduct cart={ cart } totalPrice={totalPrice} dispatch={dispatch} /> : 'Sem Produtos no Carrinho'
      }
    </section>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
  totalPrice: state.cartReducer.totalValue
})

export default connect(mapStateToProps)(Cart)
