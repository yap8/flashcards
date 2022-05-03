import { combineReducers } from 'redux';

import collectionsReducer from './collectionsReducer';
import collectionReducer from './collectionReducer';
import profileReducer from './profileReducer';
import themeReducer from './themeReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  theme: themeReducer,
  profile: profileReducer,
  collections: collectionsReducer,
  collection: collectionReducer,
});

export default rootReducer;
