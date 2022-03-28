import api from '../../http/index'
import { REMOVE_USER, SET_USER } from './types'

export const setUser = (user) => {
  localStorage.setItem('authToken', user.authToken)

  return {
    type: SET_USER,
    payload: user
  }
}

export const removeUser = () => {
  localStorage.removeItem('authToken')

  return {
    type: REMOVE_USER
  }
}

export const logout = () => dispatch => dispatch(removeUser())

export const register = (name, email, password) => async dispatch => {
  try {
    const { data } = await api.post('/api/users/register', {
      name,
      email,
      password
    })

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

    dispatch(setUser(data))
  } catch (error) {
    console.log(error)
  }
}
