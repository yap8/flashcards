import {
  COLLECTION_SET_COLLECTION,
  COLLECTION_FLIP_CARD,
} from '../actions/types';

const collectionReducer = (state = null, action) => {
  switch (action.type) {
    case COLLECTION_SET_COLLECTION:
      return action.payload;
    case COLLECTION_FLIP_CARD:
      return {
        ...state,
        cards: state.cards.map((card, index) =>
          index === action.payload ? { ...card, flipped: !card.flipped } : card
        ),
      };
    default:
      return state;
  }
};

export default collectionReducer;
