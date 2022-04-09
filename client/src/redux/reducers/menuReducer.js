import { MENU_CLOSE_MENU, MENU_OPEN_MENU } from "../actions/types"

const initialState = false

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_OPEN_MENU:
      return true
    case MENU_CLOSE_MENU:
      return false
    default:
      return state
  }
}

export default menuReducer
