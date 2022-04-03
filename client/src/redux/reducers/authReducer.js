import { SET_USER, SET_LOADING, SET_ERROR, SET_SUCCESS, RESET, SET_MESSAGE } from '../actions/types'

const initialState = {
  user: localStorage.getItem('user'),
  loading: false,
  error: false,
  success: false,
  message: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SET_SUCCESS:
      return {
        ...state,
        success: action.payload
      }
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    case RESET:
      return {
        ...initialState,
        user: null
      }
    default:
      return state
  }
}

export default authReducer
