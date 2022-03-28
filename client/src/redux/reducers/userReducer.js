import { SET_USER, REMOVE_USER, SET_LOADING, SET_ERROR } from '../actions/types'

const initialState = {
  id: null,
  name: null,
  email: null,
  authToken: localStorage.getItem('authToken') || null,
  error: false,
  loading: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case REMOVE_USER:
      return {
        ...initialState,
        authToken: null
      }
    default:
      return state
  }
}

export default userReducer
