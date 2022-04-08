import { MENU_CLOSE_MENU, MENU_OPEN_MENU } from "./types"

export const openMenu = (name) => {
  return {
    type: MENU_OPEN_MENU,
    payload: name
  }
}

export const closeMenu = () => {
  return {
    type: MENU_CLOSE_MENU
  }
}
