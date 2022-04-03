import api from '../../http/index'
import { PROFILE_SET_ERROR, PROFILE_SET_LOADING, PROFILE_SET_MESSAGE, PROFILE_SET_DATA, PROFILE_SET_SUCCESS, PROFILE_RESET } from './types'

export const setLoading = (value) => {
  return {
    type: PROFILE_SET_LOADING,
    payload: value
  }
}

export const setError = (value) => {
  return {
    type: PROFILE_SET_ERROR,
    payload: value
  }
}

export const setSuccess = (value) => {
  return {
    type: PROFILE_SET_SUCCESS,
    payload: value
  }
}

export const setMessage = (value) => {
  return {
    type: PROFILE_SET_MESSAGE,
    payload: value
  }
}

export const getProfileData = () => async dispatch => {
  try {
    dispatch({ type: PROFILE_RESET })
    dispatch(setLoading(true))

    const { data } = await api.get('/api/users/info')

    dispatch({
      type: PROFILE_SET_DATA,
      payload: {
        name: data.name,
        email: data.email
      }
    })

    dispatch(setSuccess(true))
    dispatch(setLoading(false))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setLoading(false))

    dispatch(setMessage(error.response.data.error))
  }
}

export const editProfileData = (name, email, password, passwordRepeat) => async dispatch => {
  try {
    dispatch(setLoading(true))
    dispatch(setError(false))
    dispatch(setSuccess(false))

    if (password !== passwordRepeat) throw new Error('Passwords do not match')

    const { data } = await api.patch('/api/users/edit', {
      name,
      email,
      password
    })

    dispatch({
      type: PROFILE_SET_DATA,
      payload: {
        name: data.name,
        email: data.email
      }
    })

    dispatch(setMessage('Success'))
    dispatch(setSuccess(true))
    dispatch(setLoading(false))

    dispatch(setMessage(''))
    dispatch(setSuccess(false))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setLoading(false))

    if (error.response) {
      return dispatch(setMessage(error.response.data.error))
    }

    dispatch(setMessage(error.message))
  }
}
