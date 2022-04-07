import { CARDS_FLIP_CARD, CARDS_SET_CARDS } from '../actions/types'

const initialState = []

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARDS_SET_CARDS:
      return action.payload
    case CARDS_FLIP_CARD:
      return state.map((card, index) => index === action.payload ? { ...card, flipped: !card.flipped } : card)
    default:
      return state
  }
}

export default cardsReducer
