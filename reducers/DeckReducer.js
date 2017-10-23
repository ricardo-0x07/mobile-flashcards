import { RECEIVE_DECKS, ADD_DECK } from '../actions/types';

export default function decks(state=[], action) {
    switch(action.type) {
        case RECEIVE_DECKS:
            return action.decks;
        default:
            return state;
    }
}
