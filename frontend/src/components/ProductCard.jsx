/* eslint-disable react/prop-types */
import React from 'react'
import { useHistory } from 'react-router-dom'
import '../style/components/ProductCard.css'

function ProductCard (props) {
  const history = useHistory()
  const { title, prices, thumbnail, id } = props

  const detailsProduct = (id) => {
    history.push(`/details/${id}`)
  }

  return (
    <article className="product-card" onClick={() => detailsProduct(id)}>
      <img className='thumb' src={`${thumbnail.path}.${thumbnail.extension}`} alt={`capa do ${title}`}/>
      <h1 className='title'>{title}</h1>
      {
        prices[0].price !== 0
          ? <article className='price-details'>
              <h1>R$ {prices[0].price.toFixed(2).replace('.',',')}</h1>
            </article>
          : <div className='price-details'>
              <h1 className='out'>Out of Stock</h1>
            </div>
      }
    </article>
  )
}

export default ProductCard
