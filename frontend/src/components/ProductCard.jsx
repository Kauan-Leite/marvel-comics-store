/* eslint-disable react/prop-types */
import '../style/ProductCard.css'
import { useHistory } from 'react-router-dom'
import React from 'react'

function ProductCard (props) {
  const history = useHistory()
  const { title, prices, thumbnail, id } = props

  const addCart = () => {
    console.log('addCart')
  }

  const detailsProduct = (id) => {
    history.push(`/details/${id}`)
  }

  return (
    <div className="product-card" onClick={() => detailsProduct(id)}>
      <img className='thumb' src={`${thumbnail.path}.${thumbnail.extension}`} alt={`capa do ${title}`}/>
      <h1 className='title'>{title}</h1>
      {
        prices[0].price !== 0
          ? <div className='price-details'>
              <h1>R$ {prices[0].price.toFixed(2)}</h1>
              <button onClick={addCart} className='add-to-cart'>Add To Cart</button>
            </div>
          : <div className='price-details'>
              <h1 className='out'>Out of Stock</h1>
            </div>
      }
    </div>
  )
}

export default ProductCard
