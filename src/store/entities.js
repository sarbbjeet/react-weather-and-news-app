import { combineReducers } from "redux";
import weatherReducer from "./weather";
import newsReducer from "./newsStore";

export default combineReducers({
    weather: weatherReducer,
    news: newsReducer,
});