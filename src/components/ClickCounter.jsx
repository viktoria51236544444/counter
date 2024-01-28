// ClickCounter.js
import React from "react";
import { increment } from "../store/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const ClickCounter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const handleCounterIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <p>{counter}</p>
      <button className="button" onClick={handleCounterIncrement}>
        Прибаваить
      </button>
    </div>
  );
};

export default ClickCounter;
