import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions'
import '../style/components/DetailsCard.css'

function DetailsCard (props) {
  const { products, dispatch } = props
  const history = useHistory()

  const addItemCart = (infos) => {
    dispatch(addToCart(infos))
    history.push('/cart')
  }

  return (
    products.map(({id, thumbnail, title, isbn, pageCount, creators, prices}) => {
      return (
        <section className='details-section' key={id}>
          <article className='left'>
            <img className='thumb-details' src={`${thumbnail.path}.${thumbnail.extension}`} alt={`capa do ${title}`}/>
          </article>
          <aside className='right'>
            <h1 className='title-details'>{title}</h1>
            { isbn.length > 0 ? <h1 className='subtext isbn'>ISBN: {isbn}</h1> : <h1 className='subtext'>ISBN: Desconhecido</h1>}
            { pageCount > 0 ? <h1 className='subtext num-pages'>Número de Páginas: {pageCount}</h1> : <h1 className='subtext'>Número de Páginas: Desconhecido</h1>}
            <article className='authors'>
            <h1>Autores</h1>
              <article className='authors-name'>
                { creators.items.length > 0
                  ? creators.items.map((author) => {
                    return (
                    <h1 className='subtext author' key={author.name}>{author.name}</h1>
                    )
                  })
                  : <h1 className='subtext'>Desconhecido</h1>}
              </article>
            </article>
            {
              prices[0].price !== 0
                ? <article>
                    <h1 className='pcs-details'>R$ {prices[0].price.toFixed(2).replace('.',',')}</h1>
                    <button className='add-cart-details' onClick={ () => addItemCart({id, title, price: prices[0].price})}>Add To Cart</button>
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
  products: state.comicsReducer.products
})

export default connect(mapStateToProps)(DetailsCard)
