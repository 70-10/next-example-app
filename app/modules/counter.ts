import { createSlice, PayloadAction } from "redux-starter-kit";
import { AppThunk } from "../store";

const counterModule = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    }
  }
});

export default counterModule;

export function incrementAsync(): AppThunk {
  const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

  return async dispatch => {
    await sleep(1000);
    dispatch(counterModule.actions.increment());
  };
}
