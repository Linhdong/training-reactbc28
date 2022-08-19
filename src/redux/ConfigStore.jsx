import { createStore, combineReducers } from "redux";
import { commentReducer } from "./reducers/commentReducer";
import { imgCarReducer } from "./reducers/imgCarReducer";
import { numberReducer } from "./reducers/numberReducer";

const rootReducer = combineReducers({
  number: numberReducer,
  imgCar: imgCarReducer,
  commentReducer: commentReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
