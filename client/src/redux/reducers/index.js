import { combineReducers } from 'redux'

import appReducer from './appReducer'
import authReducer from './authReducer'
import themeReducer from './themeReducer'
import profileReducer from './profileReducer'
import collectionsReducer from './collectionsReducer'
import cardsReducer from './cardsReducer'
import menuReducer from './menuReducer'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  theme: themeReducer,
  profile: profileReducer,
  collections: collectionsReducer,
  cards: cardsReducer,
  menu: menuReducer
})

export default rootReducer
