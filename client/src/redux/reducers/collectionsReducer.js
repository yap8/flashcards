import {
  COLLECTIONS_ADD_COLLECTION,
  COLLECTIONS_DELETE_COLLECTION,
  COLLECTIONS_EDIT_COLLECTION,
  COLLECTIONS_SET_COLLECTIONS,
  COLLECTIONS_RESET,
} from '../actions/types';

const collectionsReducer = (state = null, action) => {
  switch (action.type) {
    case COLLECTIONS_SET_COLLECTIONS:
      return action.payload;
    case COLLECTIONS_ADD_COLLECTION:
      return [...state, action.payload];
    case COLLECTIONS_DELETE_COLLECTION:
      return state.filter((collection) => collection._id !== action.payload);
    case COLLECTIONS_EDIT_COLLECTION:
      return state.map((collection) =>
        collection._id === action.payload._id ? action.payload : collection
      );
    case COLLECTIONS_RESET:
      return null;
    default:
      return state;
  }
};

export default collectionsReducer;
