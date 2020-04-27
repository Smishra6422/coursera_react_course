import { createStore } from "redux";
import { Reducer, INITIAL_STATE } from "./reducer";

export const store = createStore(
  Reducer, // reducer
  INITIAL_STATE // our initialState
);
