import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getComicsByID } from '../redux/actions'
import Menu from '../components/Menu'
import SkeletonDetails from '../components/SkeletonDetails'
import DetailsCard from '../components/DetailsCard'
import PropTypes from 'prop-types';


function Details (props) {
  const { dispatch, isFetching } = props
  const { id } = props.match.params
  document.title = 'Detalhes | Marvel Comics Store'

  useEffect(() => {
    dispatch(getComicsByID(id))
  }, [])

  return (
    <section>
      <Menu />
      { isFetching
        ? <SkeletonDetails />
        : <DetailsCard />
      }
    </section>

  )
}

const mapStateToProps = (state) => ({
  isFetching: state.comicsReducer.isFetching
})

Details.propTypes = {
  match: PropTypes.object,
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool,
  id: PropTypes.number,
};

export default connect(mapStateToProps)(Details)
