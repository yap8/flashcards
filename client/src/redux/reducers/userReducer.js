import { SET_USER, REMOVE_USER } from '../actions/types'

const initialState = {
  id: null,
  name: null,
  email: null,
  authToken: localStorage.getItem('authToken') || null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_USER:
      return initialState
    default:
      return state
  }
}

export default userReducer
