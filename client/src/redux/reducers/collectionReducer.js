import { COLLECTION_SET_COLLECTION } from '../actions/types';

const collectionReducer = (state = null, action) => {
  switch (action.type) {
    case COLLECTION_SET_COLLECTION:
      return action.payload;
    default:
      return state;
  }
};

export default collectionReducer;
