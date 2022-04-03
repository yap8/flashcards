import api from '../../http/index'
import { SET_USER, SET_ERROR, SET_LOADING, SET_SUCCESS, RESET, SET_MESSAGE } from './types'

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}

export const setLoading = (value) => {
  return {
    type: SET_LOADING,
    payload: value
  }
}

export const setError = (value) => {
  return {
    type: SET_ERROR,
    payload: value
  }
}

export const setSuccess = (value) => {
  return {
    type: SET_SUCCESS,
    payload: value
  }
}

export const setMessage = (value) => {
  return {
    type: SET_MESSAGE,
    payload: value
  }
}

export const logout = () => dispatch => {
  localStorage.removeItem('user')

  dispatch({
    type: RESET
  })
}

export const register = (name, email, password) => async dispatch => {
  try {
    dispatch({ type: RESET })
    dispatch(setLoading(true))

    const { data } = await api.post('/api/users/register', {
      name,
      email,
      password
    })

    localStorage.setItem('user', data.authToken)

    dispatch(setUser(data.authToken))
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
    dispatch({ type: RESET })
    dispatch(setLoading(true))

    const { data } = await api.post('/api/users/login', {
      email,
      password
    })

    localStorage.setItem('user', data.authToken)

    dispatch(setUser(data.authToken))
    dispatch(setSuccess(true))
    dispatch(setLoading(false))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setLoading(false))

    dispatch(setMessage(error.response.data.error))
  }
}

export const getUser = () => async dispatch => {
  try {
    const { data } = await api.get('/api/users/info')

    dispatch(setUser({
      id: data._id,
      name: data.name,
      email: data.email
    }))
  } catch (error) {
    alert(error.response.data.error)
  }
}

export const editUser = (name, email, password) => async dispatch => {
  try {
    dispatch(setLoading(true))
    dispatch(setError(false))

    const { data } = await api.patch('/api/users/edit', {
      name,
      email,
      password
    })

    dispatch(setUser({
      id: data._id,
      name: data.name,
      email: data.email
    }))

    dispatch(setLoading(false))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setLoading(false))

    alert(error.response.data.error)
  }
}
