import { configureStore, Action, Store } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import reducer, { RootState } from "./reducer";
import { ThunkAction } from "redux-thunk";

export type ReduxStore = Store<RootState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export function initStore(state: RootState) {
  return configureStore({
    preloadedState: state,
    reducer
  });
}

export const useCounterItem = () => useSelector((state: RootState) => state.counter);
export const useTodosItem = () => useSelector((state: RootState) => state.todos);
