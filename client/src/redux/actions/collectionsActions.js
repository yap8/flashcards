import api from '../../http/index'
import { setError, setLoading, setMessage, setSuccess } from './appActions'
import { CARDS_SET_CARDS, COLLECTIONS_ADD_COLLECTION, COLLECTIONS_FETCH_COLLECTIONS, COLLECTIONS_SET_CURRENT_COLLECTION } from './types'

export const fetchCollections = () => async dispatch => {
  try {
    const { data } = await api.get('/api/collections')

    dispatch({
      type: COLLECTIONS_FETCH_COLLECTIONS,
      payload: data
    })
  } catch (error) {
    dispatch(setError(true))
    dispatch(setLoading(false))

    dispatch(setMessage(error.message))
  }
}

export const getCollection = (id) => async dispatch => {
  try {
    const { data } = await api.get(`/api/collections/${id}`)

    dispatch({
      type: COLLECTIONS_SET_CURRENT_COLLECTION,
      payload: data
    })

    dispatch({
      type: CARDS_SET_CARDS,
      payload: data.cards
    })
  } catch (error) {
    
  }
}

export const createCollection = (title, cards) => async dispatch => {
  try {
    dispatch(setLoading(true))

    if (!title.trim()) throw new Error('Enter a valid title')

    const filteredCards = cards.filter(card => card.front && card.back)

    const { data } = await api.post('/api/collections', {
      title,
      cards: filteredCards
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
    dispatch(setError(false))
  }
}



