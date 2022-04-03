import api from '../../http/index'
import { COLLECTIONS_SET_ERROR, COLLECTIONS_SET_LOADING, COLLECTIONS_SET_SUCCESS, COLLECTIONS_RESET, COLLECTIONS_SET_MESSAGE, COLLECTIONS_ADD_COLLECTION } from './types'

export const setLoading = (value) => {
  return {
    type: COLLECTIONS_SET_LOADING,
    payload: value
  }
}

export const setError = (value) => {
  return {
    type: COLLECTIONS_SET_ERROR,
    payload: value
  }
}

export const setSuccess = (value) => {
  return {
    type: COLLECTIONS_SET_SUCCESS,
    payload: value
  }
}

export const setMessage = (value) => {
  return {
    type: COLLECTIONS_SET_MESSAGE,
    payload: value
  }
}

export const createCollection = (title, cards) => async dispatch => {
  try {
    dispatch(setLoading(true))

    if (!title) throw new Error('Enter a valid title')

    const { data } = await api.post('/api/collections', {
      title,
      cards
    })

    dispatch({
      type: COLLECTIONS_ADD_COLLECTION,
      payload: data
    })

    dispatch(setSuccess(true))
    dispatch(setLoading(false))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setLoading(false))

    if (error.response) {
      return dispatch(setMessage(error.response.data.error))
    }

    dispatch(setMessage(error.message))
  }
}

