import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Menu from '../components/Menu'
import Products from '../components/Products'
import { fetchMarvelApi } from '../redux/actions'

function Home (props) {
  // eslint-disable-next-line react/prop-types
  const { dispatch } = props
  useEffect(() => {
    dispatch(fetchMarvelApi())
  }, [])

  return (
    <div className="App">
      <Menu />
      <Products />
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
  isFetching: state.isFetching
})

export default connect(mapStateToProps)(Home)
