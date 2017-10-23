import { combineReducers } from 'redux';
import CardReducer from './CardReducer';
import DeckReducer from './DeckReducer';
import DeckFormReducer from './DeckFormReducer';
import CardFormReducer from './CardFormReducer';

export default combineReducers({
    cards: CardReducer,
    cardForm: CardFormReducer,
    deckForm: DeckFormReducer,
    decks: DeckReducer
});

