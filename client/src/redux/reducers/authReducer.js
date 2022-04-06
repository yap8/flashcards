import { AUTH_SET_USER, AUTH_RESET } from '../actions/types'

const initialState = {
  user: localStorage.getItem('user')
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case AUTH_RESET:
      return {
        ...initialState,
        user: null
      }
    default:
      return state
  }
}

export default authReducer
