import { PROFILE_SET_DATA, PROFILE_SET_ERROR, PROFILE_SET_LOADING, PROFILE_SET_MESSAGE, PROFILE_SET_SUCCESS } from '../actions/types'

const initialState = {
  name: '',
  email: '',
  loading: false,
  error: false,
  success: false,
  message: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_SET_DATA:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email
      }
    case PROFILE_SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case PROFILE_SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case PROFILE_SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    case PROFILE_SET_SUCCESS:
      return {
        ...state,
        success: action.payload
      }
    default:
      return state
  }
}

export default profileReducer
