import { THEME_CHANGE_THEME } from "./types"

export const changeTheme = (theme) => {
  localStorage.setItem('theme', theme)

  return {
    type: THEME_CHANGE_THEME,
    payload: theme
  }
}
