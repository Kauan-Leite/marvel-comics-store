/* eslint-disable react/prop-types */
import '../style/ProductCard.css'
import React from 'react'

function ProductCard (props) {
  const { title, prices, thumbnail } = props

  const addCart = () => {
    console.log('addCart')
  }

  return (
    <div className="product-card">
      <img className='thumb' src={`${thumbnail.path}.${thumbnail.extension}`} alt={`capa do ${title}`}/>
      <h1 className='title'>{title}</h1>
      {
        prices[0].price !== 0
          ? <div className='price-details'>
              <h1>R$ {prices[0].price.toFixed(2)}</h1>
              <button onClick={addCart} className='add-to-cart'>Add To Cart</button>
            </div>
          : <div className='price-details'>
              <h1>Out of Stock</h1>
            </div>
      }
    </div>
  )
}

export default ProductCard
