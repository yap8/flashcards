import { COLLECTIONS_ADD_COLLECTION, COLLECTIONS_DELETE_COLLECTION, COLLECTIONS_EDIT_COLLECTION, COLLECTIONS_FETCH_COLLECTIONS, COLLECTIONS_RESET, COLLECTIONS_SET_CURRENT_COLLECTION } from '../actions/types'

const initialState = {
  collections: [],
  current: {}
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
    case COLLECTIONS_SET_CURRENT_COLLECTION:
      return {
        ...state,
        current: action.payload
      }
    case COLLECTIONS_DELETE_COLLECTION:
      return {
        ...state,
        collections: state.collections.filter(collection => collection._id !== action.payload)
      }
    case COLLECTIONS_EDIT_COLLECTION:
      return {
        ...state,
        collections: state.collections.map(collection => collection._id === action.payload._id ? action.payload : collection)
      }
    case COLLECTIONS_RESET:
      return initialState
    default:
      return state
  }
}

export default collectionsReducer
