import api from '../../http/index';
import {
  resetRequest,
  setError,
  setMessage,
  setSuccess,
} from './requestActions';
import {
  COLLECTIONS_DELETE_COLLECTION,
  COLLECTIONS_EDIT_COLLECTION,
  COLLECTIONS_SET_COLLECTIONS,
  COLLECTIONS_ADD_COLLECTION,
} from './types';

export const fetchCollections = () => async (dispatch) => {
  try {
    const { data } = await api.get('/api/collections');

    dispatch({
      type: COLLECTIONS_SET_COLLECTIONS,
      payload: data,
    });
  } catch (error) {
    dispatch(setError(true));
    dispatch(setMessage(error.message));
  } finally {
    dispatch(resetRequest());
  }
};

export const createCollection = (title, cards) => async (dispatch) => {
  try {
    if (!title.trim()) throw new Error('Enter a valid title');

    const filteredCards = cards.filter((card) => card.front && card.back);

    const { data } = await api.post('/api/collections', {
      title,
      cards: filteredCards,
    });

    dispatch({
      type: COLLECTIONS_ADD_COLLECTION,
      payload: data,
    });

    dispatch(setSuccess(true));
  } catch (error) {
    dispatch(setError(true));

    if (error.response) {
      return dispatch(setMessage(error.response.data.error));
    }

    dispatch(setMessage(error.message));
  } finally {
    dispatch(resetRequest());
  }
};

export const deleteCollection = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COLLECTIONS_DELETE_COLLECTION,
      payload: id,
    });

    await api.delete(`/api/collections/${id}`);

    dispatch(setSuccess(true));
  } catch (error) {
    dispatch(setError(true));

    if (error.response) {
      return dispatch(setMessage(error.response.data.error));
    }

    dispatch(setMessage(error.message));
  } finally {
    dispatch(resetRequest());
  }
};

export const editCollection = (id, item) => async (dispatch) => {
  try {
    const { data } = await api.put(`/api/collections/${id}`, item);

    dispatch({
      type: COLLECTIONS_EDIT_COLLECTION,
      payload: data,
    });

    dispatch(setSuccess(true));
  } catch (error) {
    dispatch(setError(true));

    if (error.response) {
      return dispatch(setMessage(error.response.data.error));
    }

    dispatch(setMessage(error.message));
  } finally {
    dispatch(resetRequest());
  }
};
