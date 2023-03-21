import '../style/ProductCard.css'
import React from 'react'

function ProductCard () {
  return (
    <div className="product-card">
      <img src='' alt=''/>
      <h1>Title</h1>
      <p>Description</p>
      <h1>R$ 00,00</h1>
      <button className='add-to-cart'>Add To Cart</button>
    </div>
  )
}

export default ProductCard
