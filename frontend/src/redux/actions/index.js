import { getData } from '../../api/API'

export const REQUEST_STARTED = 'REQUEST_STARTED'
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL'
export const REQUEST_FAILED = 'REQUEST_FAILED'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE'

function requestStarted () {
  return { type: REQUEST_STARTED }
}

function requestSuccessful (imageURL) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageURL
  }
}

function requestFailed (error) {
  return {
    type: REQUEST_FAILED,
    payload: error
  }
}

export function fetchMarvelApi (offset) {
  return async (dispatch) => {
    dispatch(requestStarted())
    try {
      const products = await getData(offset)
      dispatch(requestSuccessful(products))
    } catch (error) {
      dispatch(requestFailed(error))
    }
  }
}

function requestNextPage () {
  return { type: NEXT_PAGE }
}

function requestPreviousPage () {
  return { type: PREVIOUS_PAGE }
}

export function nextPage (offset) {
  return async (dispatch) => {
    dispatch(requestNextPage())
    dispatch(fetchMarvelApi(offset + 20))
  }
}

export function previousPage (offset) {
  return async (dispatch) => {
    dispatch(requestPreviousPage())
    dispatch(fetchMarvelApi(offset - 20))
  }
}
