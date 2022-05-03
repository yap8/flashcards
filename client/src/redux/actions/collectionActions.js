import { APP_RESET, CARDS_SET_CARDS, COLLECTION_SET_COLLECTION } from './types';
import { setError, setMessage } from './appActions';
import api from '../../http';

export const getCollection = (id) => async (dispatch) => {
  try {
    const { data } = await api.get(`/api/collections/${id}`);

    console.log(data);

    dispatch({
      type: COLLECTION_SET_COLLECTION,
      payload: data,
    });

    dispatch({
      type: CARDS_SET_CARDS,
      payload: data.cards,
    });
  } catch (error) {
    dispatch(setError(true));
    dispatch(setMessage(error.message));
  } finally {
    dispatch({ type: APP_RESET });
  }
};
