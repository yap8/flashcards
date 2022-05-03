import api from '../../http/index';
import {
  resetRequest,
  setError,
  setMessage,
  setSuccess,
} from './requestActions';
import { PROFILE_SET_DATA, PROFILE_RESET } from './types';

export const getProfileData = () => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_RESET });

    const { data } = await api.get('/api/users/info');

    dispatch({
      type: PROFILE_SET_DATA,
      payload: {
        name: data.name,
        email: data.email,
      },
    });

    dispatch(setSuccess(true));
  } catch (error) {
    dispatch(setError(true));
    dispatch(setMessage(error.response.data.error));
  } finally {
    dispatch(resetRequest());
  }
};

export const editProfileData =
  (name, email, password, passwordRepeat) => async (dispatch) => {
    try {
      if (!password || !password.trim())
        throw new Error('Enter a valid password');

      if (password !== passwordRepeat)
        throw new Error('Passwords do not match');

      const { data } = await api.patch('/api/users/edit', {
        name,
        email,
        password,
      });

      dispatch({
        type: PROFILE_SET_DATA,
        payload: {
          name: data.name,
          email: data.email,
        },
      });

      dispatch(setMessage('Success'));
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
