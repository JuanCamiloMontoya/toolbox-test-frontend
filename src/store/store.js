import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import reducers from './reducers'

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export { store }