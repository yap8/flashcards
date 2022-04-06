import api from '../../http/index'
import { setError, setLoading, setMessage, setSuccess } from './appActions'
import { COLLECTIONS_ADD_COLLECTION } from './types'

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

