import { createSlice, PayloadAction } from "redux-starter-kit";

interface Todo {
  id: string;
  done: boolean;
  task: string;
}

const todosModule = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    }
  }
});

export default todosModule;
