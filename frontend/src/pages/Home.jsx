import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllComics } from '../redux/actions'
import Menu from '../components/Menu'
import Products from '../components/Products'
import PropTypes from 'prop-types';


function Home (props) {
  const { dispatch, offset } = props
  document.title = 'Produtos | Marvel Comics Store'

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

Home.propTypes = {
  dispatch: PropTypes.func,
  offset: PropTypes.number,
};

export default connect(mapStateToProps)(Home)
