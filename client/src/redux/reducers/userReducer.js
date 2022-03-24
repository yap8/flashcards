import { STORE_TOKEN, REMOVE_TOKEN } from '../actions/types'

const initialState = {
  authToken: localStorage.getItem('authToken')
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_TOKEN:
      return {
        ...state,
        authToken: action.payload
      }
    case REMOVE_TOKEN: {
      return {
        ...state,
        authToken: null
      }
    }
    default:
      return state
  }
}

export default userReducer
