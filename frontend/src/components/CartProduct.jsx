/* eslint-disable react/prop-types */
import React from 'react'
import { removeItemCart } from '../redux/actions'
import '../style/components/CartProduct.css'

function CartProduct (props) {
  const { cart, totalPrice, dispatch } = props


  const rmvItemCart = (index, price) => {
    dispatch(removeItemCart({index, price}))
  }

  return (
    <section className='cart-product'>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Title</th>
            <th>Sub-total</th>
            <th>Remover</th>
          </tr>
          { cart.map((item, index) => {
            return (
              <tr key={item.id}>
                <td><h1>{index + 1}</h1></td>
                <td><h1>{item.title}</h1></td>
                <td><h1>{item.price}</h1></td>
                <td><button className='rmv-btn' onClick={() => rmvItemCart(index, item.price)}>Remover</button></td>
              </tr>
            )
          }) }
        </tbody>
      </table>
      <h1 className='total-price'>Total Price: R${totalPrice.toFixed(2)}</h1>
      <h1 className='desconto'>Desconto: R${totalPrice.toFixed(2)}</h1>
    </section>
  )
}

export default CartProduct
