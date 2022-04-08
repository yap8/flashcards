import { combineReducers } from 'redux'
import appReducer from './appReducer'
import authReducer from './authReducer'
import cardsReducer from './cardsReducer'
import collectionsReducer from './collectionsReducer'
import menuReducer from './menuReducer'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  profile: profileReducer,
  collections: collectionsReducer,
  cards: cardsReducer,
  menu: menuReducer
})

export default rootReducer
