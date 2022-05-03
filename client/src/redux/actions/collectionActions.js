import { resetRequest, setError, setMessage } from './requestActions';
import api from '../../http';
import {
  COLLECTION_FLIP_CARD,
  COLLECTION_RESET_COLLECTION,
  COLLECTION_SET_COLLECTION,
} from './types';

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
    dispatch(resetRequest());
  }
};

export const resetCollection = () => {
  return {
    type: COLLECTION_RESET_COLLECTION,
  };
};

export const flipCard = (index) => {
  return {
    type: COLLECTION_FLIP_CARD,
    payload: index,
  };
};
