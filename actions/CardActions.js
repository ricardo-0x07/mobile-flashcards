import { RECEIVE_CARDS, CARD_CREATE, CARD_UPDATE } from './types';

export function receiveCards(cards) {
    return {
        type: RECEIVE_CARDS,
        cards
    }
}

export function addCard(card) {
    return {
        type: CARD_CREATE,
        payload: card
    }
}

export const cardUpdate = ({ prop, value }) => {
    return {
        type: CARD_UPDATE,
        payload: { prop, value }
    };
};
