import { RECEIVE_CARDS, ADD_CARD } from '../actions/types';

export default function cards(state={}, action) {
    switch(action.type) {
        case RECEIVE_CARDS:
            return action.cards;
        default:
            return state;
    }
}
