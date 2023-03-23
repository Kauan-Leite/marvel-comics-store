/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getComicsByID } from '../redux/actions'
import Menu from '../components/Menu'
import SkeletonDetails from '../components/SkeletonDetails'
import DetailsCard from '../components/DetailsCard'

function Details (props) {
  const { dispatch, isFetching } = props
  const { id } = props.match.params

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

export default connect(mapStateToProps)(Details)
