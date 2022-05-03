import {
  APP_RESET,
  COLLECTION_FLIP_CARD,
  COLLECTION_SET_COLLECTION,
} from './types';
import { setError, setMessage } from './appActions';
import api from '../../http';

export const getCollection = (id) => async (dispatch) => {
  try {
    const { data } = await api.get(`/api/collections/${id}`);

    dispatch({
      type: COLLECTION_SET_COLLECTION,
      payload: data,
    });
  } catch (error) {
    dispatch(setError(true));
    dispatch(setMessage(error.message));
  } finally {
    dispatch({ type: APP_RESET });
  }
};

export const flipCard = (index) => {
  return {
    type: COLLECTION_FLIP_CARD,
    payload: index,
  };
};
