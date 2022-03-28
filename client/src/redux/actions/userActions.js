import api from '../../http/index'
import { REMOVE_USER, SET_USER } from './types'

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
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
    const { data } = await api.post('/api/users/register', {
      name,
      email,
      password
    })

    localStorage.setItem('authToken', data.authToken)

    dispatch(setUser(data))
  } catch (error) {
    console.log(error)
  }
}

export const login = (email, password) => async dispatch => {
  try {
    const { data } = await api.post('/api/users/login', {
      email,
      password
    })

    localStorage.setItem('authToken', data.authToken)

    dispatch(setUser(data))
  } catch (error) {
    console.log(error)
  }
}

export const getUser = () => async dispatch => {
  try {
    const { data } = await api.get('/api/users/info')

    dispatch(setUser(data))
  } catch (error) {
    console.log(error)
  }
}
