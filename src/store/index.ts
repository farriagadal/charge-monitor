import { configureStore } from '@reduxjs/toolkit'
// Reducer
import resources from './slices/resources'

export default configureStore({
  reducer: {
    resources
  }
})
