import {
  REQUEST_SET_ERROR,
  REQUEST_SET_MESSAGE,
  REQUEST_SET_SUCCESS,
} from './types';

export const setError = (value) => {
  return {
    type: REQUEST_SET_ERROR,
    payload: value,
  };
};

export const setSuccess = (value) => {
  return {
    type: REQUEST_SET_SUCCESS,
    payload: value,
  };
};

export const setMessage = (value) => {
  return {
    type: REQUEST_SET_MESSAGE,
    payload: value,
  };
};
