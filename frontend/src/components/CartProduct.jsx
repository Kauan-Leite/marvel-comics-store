import React from 'react';
import { removeItemCart } from '../redux/actions';
import Trash from '../images/trash.svg';
import PropTypes from 'prop-types';
import '../style/components/CartProduct.css';

function CartProduct (props) {
  const { cart, totalPrice, dispatch } = props;


  const rmvItemCart = (index, price) => {
    dispatch(removeItemCart({index, price}));
  }

  return (
    <section className='cart-product'>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Título</th>
            <th>Preço</th>
            <th>Remover</th>
          </tr>
          { cart.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>
                  <h1>{index + 1}</h1>
                </td>
                <td>
                  <h1>{item.title}</h1>
                </td>
                <td>
                  <h1>{`R$ ${item.price.toFixed(2)}`}</h1>
                </td>
                <td>
                  <button className='rmv-btn' onClick={() => rmvItemCart(index, item.price)}>
                    <img src={Trash} alt='remover item do carrinho' />
                  </button>
                </td>
              </tr>
            );
          }) }
        </tbody>
      </table>
      <h1 className='total-price'>Total: R${totalPrice.toFixed(2)}</h1>
    </section>
  )
}

CartProduct.propTypes = {
  cart: PropTypes.array,
  totalPrice: PropTypes.number,
  dispatch: PropTypes.func,
};

export default CartProduct
