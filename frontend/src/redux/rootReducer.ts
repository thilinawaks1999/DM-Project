import { combineReducers } from "@reduxjs/toolkit";
import { poemsReducer } from "./slice";

const rootReducer = combineReducers({
  poemsReducer: poemsReducer,
});

export default rootReducer;
