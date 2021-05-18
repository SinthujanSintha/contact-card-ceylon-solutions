import {combineReducers} from "redux";
import {cardReducer, searchCardsReducer, selectedCardReducer} from "./cardReducer";

const reducers = combineReducers({
    allCards:cardReducer,
    card:selectedCardReducer,
    searchCards:searchCardsReducer
})

export default reducers