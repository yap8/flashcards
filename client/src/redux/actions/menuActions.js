import { MENU_CLOSE_MENU, MENU_OPEN_MENU } from "./types"

export const openMenu = () => {
  return {
    type: MENU_OPEN_MENU
  }
}

export const closeMenu = () => {
  return {
    type: MENU_CLOSE_MENU
  }
}
