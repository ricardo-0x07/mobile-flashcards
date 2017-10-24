import { AsyncStorage } from 'react-native';
import { FLASHCARDS_STORAGE_KEY } from './config';

export function getDecks() {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
        let data = JSON.parse(results);
        if(!data) {
            return []
        }
        let keys = Object.keys(data);
        let decks = keys.map(function (item) {
            let card = data[item];
            card.title = item;

            return card;
        });
        return decks;
    })
    .catch(error => console.log('getDecks error', error));
}
export function getDeck( key ) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
        if(results) {
            return JSON.parse(results)[key];
        } else {
            return {};
        }
    });
}

export function saveDeckTitle({ key, deck }) {
    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({[key]: deck}))
    .catch(error => console.log('addCardToDeck error', error));
}

export function addCardToDeck({ key, card }) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
        let data = JSON.parse(results);
        let questions = [...data[key].questions, card]
        data[key]['questions'] = questions;
        return AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
    })
    .catch(error => console.log('addCardToDeck error', error));
}

export function removeDeck(key) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
        const data = JSON.parse(results);
        data[key] = undefined;
        delete data[key];
        return AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
    })
    .catch(error => console.log('addCardToDeck error', error));
}

export function clearDecks(key) {
    return AsyncStorage.clear();
}
