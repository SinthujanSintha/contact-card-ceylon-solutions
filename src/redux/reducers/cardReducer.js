import {ActionTypes} from "../constants/actions-type";

const initialState = {
    cards: []
}

export const cardReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_CARDS :
            return {
                ...state,
                cards: payload
            }
        default:
            return state

    }
}
export const selectedCardReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_CARD:
            return { ...state, ...payload };
        default:
            return state;
    }
};

export const searchCardsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SEARCH_CARD:
            return { ...state, ...payload };
        default:
            return state;
    }
};