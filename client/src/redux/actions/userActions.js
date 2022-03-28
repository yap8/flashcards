import api from '../../http/index'
import { REMOVE_USER, SET_USER, SET_ERROR, SET_LOADING } from './types'

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

export const logout = () => dispatch => {
  localStorage.removeItem('authToken')

  dispatch({
    type: REMOVE_USER
  })
}

export const register = (name, email, password) => async dispatch => {
  try {
    dispatch(setLoading(true))
    dispatch(setError(false))

    const { data } = await api.post('/api/users/register', {
      name,
      email,
      password
    })

    localStorage.setItem('authToken', data.authToken)

    dispatch(setUser(data))
    dispatch(setLoading(false))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setLoading(false))

    alert(error.response.data.error)
  }
}

export const login = (email, password) => async dispatch => {
  try {
    dispatch(setLoading(true))
    dispatch(setError(false))

    const { data } = await api.post('/api/users/login', {
      email,
      password
    })

    localStorage.setItem('authToken', data.authToken)

    dispatch(setUser(data))
    dispatch(setLoading(false))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setLoading(false))

    alert(error.response.data.error)
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
