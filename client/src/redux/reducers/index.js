import { combineReducers } from 'redux';

import collectionsReducer from './collectionsReducer';
import profileReducer from './profileReducer';
import themeReducer from './themeReducer';
import cardsReducer from './cardsReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  theme: themeReducer,
  profile: profileReducer,
  collections: collectionsReducer,
  cards: cardsReducer,
});

export default rootReducer;
