import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import comicsReducer from './reducers/comicsReducer'
import thunk from 'redux-thunk'

const store = createStore(comicsReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
