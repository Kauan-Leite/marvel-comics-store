import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllComics } from '../redux/actions'
import Menu from '../components/Menu'
import Products from '../components/Products'

function Home (props) {
  // eslint-disable-next-line react/prop-types
  const { dispatch, offset } = props
  useEffect(() => {
    dispatch(getAllComics(offset))
  }, [])

  return (
    <main>
      <Menu />
      <Products />
    </main>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
  isFetching: state.isFetching,
  offset: state.offset
})

export default connect(mapStateToProps)(Home)
