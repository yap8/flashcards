import { COLLECTIONS_RESET, COLLECTIONS_SET_ERROR, COLLECTIONS_SET_LOADING, COLLECTIONS_SET_MESSAGE, COLLECTIONS_SET_SUCCESS } from '../actions/types'

const initialState = {
  collections: [],
  loading: false,
  error: false,
  success: false,
  message: ''
}

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLECTIONS_SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case COLLECTIONS_SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case COLLECTIONS_SET_SUCCESS:
      return {
        ...state,
        success: action.payload
      }
    case COLLECTIONS_SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    case COLLECTIONS_RESET:
      return initialState
    default:
      return state
  }
}

export default collectionsReducer
