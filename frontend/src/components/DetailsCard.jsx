import React from 'react'
import { connect } from 'react-redux'
import '../style/components/DetailsCard.css'

function DetailsCard (props) {
  const { products } = props

  return (
    products.map((product) => {
      return (
        <section className='details-section' key={product.id}>
          <article className='left'>
            <img className='thumb-details' src={`${product.thumbnail.path}.${product.thumbnail.extension}`} alt={`capa do ${product.title}`}/>
          </article>
          <aside className='right'>
            <h1 className='title-details'>{product.title}</h1>
            { product.isbn.length > 0 ? <h1 className='subtext'>ISBN: {product.isbn}</h1> : <h1 className='subtext'>ISBN: Desconhecido</h1>}
            { product.pageCount > 0 ? <h1 className='subtext'>Número de Páginas: {product.pageCount}</h1> : <h1 className='subtext'>Número de Páginas: Desconhecido</h1>}
            <article className='authors'>
            <h1>Autores</h1>
              <article className='authors-name'>
                { product.creators.items.length > 0
                  ? product.creators.items.map((author) => {
                    return (
                    <h1 className='subtext' key={author.name}>{author.name}</h1>
                    )
                  })
                  : <h1 className='subtext'>Desconhecido</h1>}
              </article>
            </article>
            {
              product.prices[0].price !== 0
                ? <article>
                    <h1 className='pcs-details'>R$ {product.prices[0].price.toFixed(2)}</h1>
                    <button className='add-cart-details'>Add To Cart</button>
                  </article>
                : <article>
                    <h1 className='out'>Out of Stock</h1>
                  </article>
            }
          </aside>
        </section>
      )
    })
  )
}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps)(DetailsCard)
