import { ADD_DECK, RECEIVE_DECKS, RECEIVE_CARDS, CARD_CREATE, CARD_UPDATE, DECK_UPDATE, DECK_CREATE, D, CLEARED_STORAGE } from './types';
import { getDecks, getDeck, saveDeckTitle, addCardToDeck, removeDeck, clearDecks } from '../utils/api';

export function receiveDecks() {
    return (dispatch) => {
        getDecks()
            .then(decks => {
                console.log('receiveDecks decks', decks)
                return dispatch({ type: RECEIVE_DECKS, decks });
            })
            .catch(error => console.log('receiveDecks error', error));
    }
}

export function addDeck(key) {
    console.log('addDeck', key);
    const deck = {title: key, questions: []};
    return (dispatch) => {
        saveDeckTitle({key, deck})
            .then()
            .then((decks) => {
                return dispatch({ type: DECK_CREATE, decks });
                
            })
            .catch(error => console.log('addDeck error', error));
    }
}

// export function removeDeckAction(key) {
//     return (dispatch) => {
//         removeDeck({key})
//             .then((decks) => {
//                 dispatch({ type: DECK_CREATE, decks });
//             });
//     }
// }

export function addCard(key, card) {
    console.log('addCard', card);
    console.log('addCard, key', key);
    return (dispatch) => {
        addCardToDeck({key, card})
        .then(decks => {
            return dispatch({type: CARD_CREATE, decks });
        })
        .catch(error => console.log('addCard error', error));
 }
}
export function clear() {
    return (dispatch) => {
        clearDecks()
        .then(() => {
            return  dispatch({type: CLEARED_STORAGE });
        })
        .catch(error => console.log('clear error', error));
 }
}

export const cardUpdate = ({ prop, value }) => {
    return {
        type: CARD_UPDATE,
        payload: { prop, value }
    };
};

export const deckUpdate = ({ prop, value }) => {
    return {
        type: DECK_UPDATE,
        payload: { prop, value }
    };
};
