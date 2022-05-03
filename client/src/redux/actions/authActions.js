import api from '../../http/index';
import {
  resetRequest,
  setError,
  setMessage,
  setSuccess,
} from './requestActions';
import {
  AUTH_SET_USER,
  AUTH_RESET,
  COLLECTIONS_RESET,
  PROFILE_RESET,
  REQUEST_RESET,
} from './types';

export const setUser = (user) => {
  return {
    type: AUTH_SET_USER,
    payload: user,
  };
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('user');

  dispatch({
    type: AUTH_RESET,
  });

  dispatch({
    type: REQUEST_RESET,
  });

  dispatch({
    type: COLLECTIONS_RESET,
  });

  dispatch({
    type: PROFILE_RESET,
  });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_RESET });

    const { data } = await api.post('/api/users/register', {
      name,
      email,
      password,
    });

    localStorage.setItem('user', data);

    dispatch(setUser(data));
    dispatch(setSuccess(true));
  } catch (error) {
    dispatch(setError(true));
    dispatch(setMessage(error.response.data.error));
  } finally {
    dispatch(resetRequest());
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_RESET });

    const { data } = await api.post('/api/users/login', {
      email,
      password,
    });

    localStorage.setItem('user', data);

    dispatch(setUser(data));
    dispatch(setSuccess(true));
  } catch (error) {
    dispatch(setError(true));
    dispatch(setMessage(error.response.data.error));
  } finally {
    dispatch(resetRequest());
  }
};
