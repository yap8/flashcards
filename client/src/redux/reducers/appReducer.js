import { APP_RESET, APP_SET_ERROR, APP_SET_LOADING, APP_SET_MESSAGE, APP_SET_SUCCESS } from "../actions/types";

const initialState = {
  loading: false,
  error: false,
  success: false,
  message: '',
  menus: {
    header: false
  }
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case APP_SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case APP_SET_SUCCESS:
      return {
        ...state,
        success: action.payload
      }
    case APP_SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    case APP_RESET:
      return initialState
    default:
      return state
  }
}

export default appReducer
