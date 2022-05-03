import { combineReducers } from 'redux';

import collectionsReducer from './collectionsReducer';
import collectionReducer from './collectionReducer';
import requestReducer from './requestReducer';
import profileReducer from './profileReducer';
import themeReducer from './themeReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  request: requestReducer,
  auth: authReducer,
  theme: themeReducer,
  profile: profileReducer,
  collections: collectionsReducer,
  collection: collectionReducer,
});

export default rootReducer;
