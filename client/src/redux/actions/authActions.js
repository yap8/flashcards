import api from '../../http/index'
import { AUTH_SET_USER, AUTH_SET_ERROR, AUTH_SET_LOADING, AUTH_SET_SUCCESS, AUTH_RESET, AUTH_SET_MESSAGE } from './types'

export const setUser = (user) => {
  return {
    type: AUTH_SET_USER,
    payload: user
  }
}

export const setLoading = (value) => {
  return {
    type: AUTH_SET_LOADING,
    payload: value
  }
}

export const setError = (value) => {
  return {
    type: AUTH_SET_ERROR,
    payload: value
  }
}

export const setSuccess = (value) => {
  return {
    type: AUTH_SET_SUCCESS,
    payload: value
  }
}

export const setMessage = (value) => {
  return {
    type: AUTH_SET_MESSAGE,
    payload: value
  }
}

export const logout = () => dispatch => {
  localStorage.removeItem('user')

  dispatch({
    type: AUTH_RESET
  })
}

export const register = (name, email, password) => async dispatch => {
  try {
    dispatch({ type: AUTH_RESET })
    dispatch(setLoading(true))

    const { data } = await api.post('/api/users/register', {
      name,
      email,
      password
    })

    localStorage.setItem('user', data)

    dispatch(setUser(data))
    dispatch(setSuccess(true))
    dispatch(setLoading(false))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setLoading(false))

    dispatch(setMessage(error.response.data.error))
  }
}

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: AUTH_RESET })
    dispatch(setLoading(true))

    const { data } = await api.post('/api/users/login', {
      email,
      password
    })

    localStorage.setItem('user', data)

    dispatch(setUser(data))
    dispatch(setSuccess(true))
    dispatch(setLoading(false))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setLoading(false))

    dispatch(setMessage(error.response.data.error))
  }
}
