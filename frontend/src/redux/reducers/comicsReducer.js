import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED, NEXT_PAGE, PREVIOUS_PAGE } from '../actions'

const INITIAL_STATE = {
  products: [],
  page: 1,
  offset: 0,
  isFetching: true,
  errorMessage: ''
}

function comicsReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        products: []
      }
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        errorMessage: '',
        products: action.payload
      }
    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
        products: []
      }
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
        offset: state.offset + 20
      }
    case PREVIOUS_PAGE:
      return {
        ...state,
        page: state.page - 1,
        offset: state.offset - 20
      }
    default:
      return state
  }
}

export default comicsReducer
