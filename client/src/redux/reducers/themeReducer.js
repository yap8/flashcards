import { THEME_TOGGLE_DARK_THEME } from "../actions/types"

const initialState = null

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_TOGGLE_DARK_THEME:
      return state === 'dark' ? '' : 'dark'
    default:
      return state
  }
}

export default themeReducer
