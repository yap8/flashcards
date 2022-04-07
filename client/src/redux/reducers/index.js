import { combineReducers } from 'redux'
import appReducer from './appReducer'
import authReducer from './authReducer'
import cardsReducer from './cardsReducer'
import collectionsReducer from './collectionsReducer'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  profile: profileReducer,
  collections: collectionsReducer,
  cards: cardsReducer
})

export default rootReducer
