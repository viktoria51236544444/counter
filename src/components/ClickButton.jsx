import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../store/counterSlice";

const ClickButton = () => {
  useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const handleCounterReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      <button className="button" onClick={handleCounterReset}>
        Обнулить
      </button>
    </div>
  );
};

export default ClickButton;
