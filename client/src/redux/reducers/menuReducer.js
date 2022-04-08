import { MENU_CLOSE_MENU, MENU_OPEN_MENU } from "../actions/types"

const initialState = {
  collections: false,
  avatar: false
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_OPEN_MENU:
      return {
        ...state,
        [action.payload]: true
      }
    case MENU_CLOSE_MENU:
      return initialState
    default:
      return state
  }
}

export default menuReducer
