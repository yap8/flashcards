import { APP_SET_ERROR, APP_SET_LOADING, APP_SET_MESSAGE, APP_SET_SUCCESS } from "./types"

export const setLoading = (value) => {
  return {
    type: APP_SET_LOADING,
    payload: value
  }
}

export const setError = (value) => {
  return {
    type: APP_SET_ERROR,
    payload: value
  }
}

export const setSuccess = (value) => {
  return {
    type: APP_SET_SUCCESS,
    payload: value
  }
}

export const setMessage = (value) => {
  return {
    type: APP_SET_MESSAGE,
    payload: value
  }
}
