import { combineReducers } from 'redux'
import comicsReducer from './comicsReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({ comicsReducer, cartReducer })

export default rootReducer
