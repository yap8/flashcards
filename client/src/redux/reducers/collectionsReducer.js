import { COLLECTIONS_ADD_COLLECTION, COLLECTIONS_FETCH_COLLECTIONS, COLLECTIONS_RESET } from '../actions/types'

const initialState = {
  collections: []
}

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLECTIONS_FETCH_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    case COLLECTIONS_ADD_COLLECTION:
      return {
        ...state,
        collections: [
          ...state.collections,
          action.payload
        ]
      }
    case COLLECTIONS_RESET:
      return initialState
    default:
      return state
  }
}

export default collectionsReducer
