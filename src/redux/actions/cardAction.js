import {ActionTypes} from '../constants/actions-type'

export const setCard = (cards) => {
    return {
        type: ActionTypes.SET_CARDS,
        payload: cards
    }
}

export const selectedCard = (card) => {
    return {
        type: ActionTypes.SELECTED_CARD,
        payload: card,
    };
};
