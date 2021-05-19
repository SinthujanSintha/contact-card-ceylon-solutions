import {combineReducers} from "redux";
import {cardReducer, selectedCardReducer} from "./cardReducer";

const reducers = combineReducers({
    allCards:cardReducer,
    card:selectedCardReducer,
})

export default reducers