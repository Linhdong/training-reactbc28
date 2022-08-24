import { createStore, combineReducers } from "redux";
import bugerReducer from "./reducers/bugerReducer";
import { commentReducer } from "./reducers/commentReducer";
import { formSVReducer } from "./reducers/formSVReducer";
import { imgCarReducer } from "./reducers/imgCarReducer";
import { numberReducer } from "./reducers/numberReducer";

const rootReducer = combineReducers({
  number: numberReducer,
  imgCar: imgCarReducer,
  commentReducer: commentReducer,
  bugerReducer: bugerReducer,
  formSVReducer: formSVReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
