import { combineReducers } from "redux";
import { Type } from "../actions";

import auth from "./auth";

const menu = (state = { opened: false }, action) => {
  const { Menu } = Type;
  switch (action.type) {
    case Menu.Toggle:
      return { opened: !state.opened };
    case Menu.Open:
      return { opened: true };
    case Menu.Close:
      return { opened: false };
    default:
      return state;
  }
};

export default combineReducers({ menu, auth });
