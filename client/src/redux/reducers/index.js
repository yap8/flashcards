import { combineReducers } from 'redux'
import appReducer from './appReducer'
import authReducer from './authReducer'
import collectionsReducer from './collectionsReducer'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  profile: profileReducer,
  collections: collectionsReducer
})

export default rootReducer
