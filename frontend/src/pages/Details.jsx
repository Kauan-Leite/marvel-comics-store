/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Menu from '../components/Menu'
import { getComicsByID } from '../redux/actions'

function Details (props) {
  const { dispatch, products } = props
  const { id } = props.match.params

  useEffect(() => {
    dispatch(getComicsByID(id))
  }, [])

  return (
    <div>
      <Menu />
      { products.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.id}</h1>
            <h1>{product.title}</h1>
            <h1>{product.isbn}</h1>
            <h1>{product.pageCount}</h1>
            <h1>{product.prices[0].price}</h1>
            <img src={`${product.thumbnail.path}.${product.thumbnail.extension}`} alt={`capa do ${product.title}`}/>
            {product.creators.items.map((author) => {
              return (
                <h1 key={author.name}>{author.name}</h1>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
  isFetching: state.isFetching
})

export default connect(mapStateToProps)(Details)
