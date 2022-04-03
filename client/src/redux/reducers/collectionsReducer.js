import {  } from '../actions/types'

const initialState = {
  collections: [],
  loading: false,
  error: false,
  success: false,
  message: ''
}

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default collectionsReducer
