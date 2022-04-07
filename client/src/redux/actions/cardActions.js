import { CARDS_FLIP_CARD } from "./types"

export const flipCard = (index) => {
  return {
    type: CARDS_FLIP_CARD,
    payload: index
  }
}
