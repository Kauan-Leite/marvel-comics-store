/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Menu from '../components/Menu'
import SkeletonLoadingDetails from '../components/SkeletonLoadingDetails'
import { getComicsByID } from '../redux/actions'
import '../style/Details.css'

function Details (props) {
  const { dispatch, products, isFetching } = props
  const { id } = props.match.params

  useEffect(() => {
    dispatch(getComicsByID(id))
  }, [])

  return (
    <div>
      <Menu />
      {
        isFetching
          ? <SkeletonLoadingDetails />
          : products.map((product) => {
            return (
          <section key={product.id}>
            <div className='left'>
              <img className='thumb-details' src={`${product.thumbnail.path}.${product.thumbnail.extension}`} alt={`capa do ${product.title}`}/>
            </div>
            <div className='right'>
              <h1 className='title-details'>{product.title}</h1>
              { product.isbn.length > 0 ? <h1 className='subtext'>ISBN: {product.isbn}</h1> : <h1 className='subtext'>ISBN: Desconhecido</h1>}
              { product.pageCount > 0 ? <h1 className='subtext'>Número de Páginas: {product.pageCount}</h1> : <h1 className='subtext'>Número de Páginas: Desconhecido</h1>}
              <div className='authors'>
              <h1>Autores</h1>
                <div className='authors-name'>
                  { product.creators.items.length > 0
                    ? product.creators.items.map((author) => {
                      return (
                      <h1 className='subtext' key={author.name}>{author.name}</h1>
                      )
                    })
                    : <h1 className='subtext'>Desconhecido</h1>}
                </div>
              </div>
              {
                product.prices[0].price !== 0
                  ? <div>
                      <h1 className='pcs-details'>R$ {product.prices[0].price.toFixed(2)}</h1>
                      <button className='add-cart-details'>Add To Cart</button>
                    </div>
                  : <div>
                      <h1 className='out'>Out of Stock</h1>
                    </div>
              }
            </div>
          </section>
            )
          })
    }
    </div>

  )
}

const mapStateToProps = (state) => ({
  products: state.products,
  isFetching: state.isFetching
})

export default connect(mapStateToProps)(Details)
