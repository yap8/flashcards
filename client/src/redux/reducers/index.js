import { combineReducers } from 'redux'
import authReducer from './authReducer'
import collectionsReducer from './collectionsReducer'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  collections: collectionsReducer
})

export default rootReducer
