import React from "react";
import { NextComponentType } from "next";
import { useCounterItem } from "../app/store";
import { useDispatch } from "react-redux";
import counterModule, { incrementAsync } from "../app/modules/counter";

const Counter: NextComponentType = () => {
  const { count } = useCounterItem();
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="subtitle">{count}</h2>
      <div className="buttons">
        <button className="button" onClick={() => dispatch(counterModule.actions.increment())}>
          +1
        </button>
        <button className="button" onClick={() => dispatch(counterModule.actions.setCount(0))}>
          Reset
        </button>
        <button className="button is-warning" onClick={() => dispatch(incrementAsync())}>
          Async +1
        </button>
      </div>
    </>
  );
};

export default Counter;
