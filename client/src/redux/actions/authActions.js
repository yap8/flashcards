import api from '../../http/index'
import { setError, setLoading, setMessage, setSuccess } from './appActions'
import { AUTH_SET_USER, AUTH_RESET, APP_RESET, COLLECTIONS_RESET, PROFILE_RESET } from './types'

export const setUser = (user) => {
  return {
    type: AUTH_SET_USER,
    payload: user
  }
}

export const logout = () => dispatch => {
  localStorage.removeItem('user')

  dispatch({
    type: AUTH_RESET
  })

  dispatch({
    type: APP_RESET
  })

  dispatch({
    type: COLLECTIONS_RESET
  })

  dispatch({
    type: PROFILE_RESET
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
    dispatch(setSuccess(false))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setLoading(false))

    dispatch(setMessage(error.response.data.error))
    dispatch(setError(false))
    dispatch(setMessage(''))
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
    dispatch(setSuccess(false))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setLoading(false))

    dispatch(setMessage(error.response.data.error))
    dispatch(setError(false))
    dispatch(setMessage(''))
  }
}
