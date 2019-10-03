import { combineReducers } from "redux-starter-kit";
import counterModule from "./modules/counter";
import todosModule from "./modules/todos";

const rootReducer = combineReducers({
  counter: counterModule.reducer,
  todos: todosModule.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
