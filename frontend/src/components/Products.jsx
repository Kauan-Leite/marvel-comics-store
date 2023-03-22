/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import ProductCard from './ProductCard'
import '../style/Products.css'
import { nextPage, previousPage } from '../redux/actions'
import SkeletonLoading from './SkeletonLoading'

function Products (props) {
  const { dispatch, products, isFetching, offset, page } = props
  return (
    <div className='all-products'>
      { isFetching
        ? Array.from({ length: 20 }).map((_, index) => (
          <SkeletonLoading key={index} />
        ))
        : products.map((product) => {
          const { id, title, prices, thumbnail } = product
          return (
            <ProductCard
              key={ id }
              title={ title }
              prices={ prices }
              thumbnail={ thumbnail }
            />
          )
        })
      }
            <button disabled={ offset <= 0} onClick={ () => dispatch(previousPage(offset)) }>Previous Page</button>
            <h1>Page: {page}</h1>
            <button onClick={ () => dispatch(nextPage(offset)) }>Next Page</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
  isFetching: state.isFetching,
  page: state.page,
  offset: state.offset
})

export default connect(mapStateToProps)(Products)
