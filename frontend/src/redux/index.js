import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import productsReducer from './reducers/productsReducer'
import thunk from 'redux-thunk'

const store = createStore(productsReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
