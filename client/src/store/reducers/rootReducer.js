import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import itinerariesReducer from "./itineraryReducer";

const rootReducer = combineReducers({cities: citiesReducer , itineraries: itinerariesReducer});
export default rootReducer;/*  */