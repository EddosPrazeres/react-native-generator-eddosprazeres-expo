import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middlewares = [ReduxPromise, thunk]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
const store = createStoreWithMiddleware(reducers)

export default store