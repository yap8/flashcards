import { AUTH_SET_USER, AUTH_SET_LOADING, AUTH_SET_ERROR, AUTH_SET_SUCCESS, AUTH_RESET, AUTH_SET_MESSAGE } from '../actions/types'

const initialState = {
  user: localStorage.getItem('user'),
  loading: false,
  error: false,
  success: false,
  message: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case AUTH_SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case AUTH_SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case AUTH_SET_SUCCESS:
      return {
        ...state,
        success: action.payload
      }
    case AUTH_SET_MESSAGE:
      return {
        ...state,
        message: action.payload
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
