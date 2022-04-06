import { COLLECTIONS_RESET } from '../actions/types'

const initialState = {
  collections: []
}

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLECTIONS_RESET:
      return initialState
    default:
      return state
  }
}

export default collectionsReducer
