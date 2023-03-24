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
      <article className='price-details'>
      {
        prices[0].price !== 0
              ? <h1 className='price'>R$ {prices[0].price.toFixed(2).replace('.',',')}</h1>
              : <h1 className='out'>Sem Estoque</h1>
      }
      </article>
    </article>
  )
}

export default ProductCard
