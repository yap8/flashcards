import { PROFILE_SET_DATA } from '../actions/types'

const initialState = {
  name: '',
  email: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_SET_DATA:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email
      }
    default:
      return state
  }
}

export default profileReducer
