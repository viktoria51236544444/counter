import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ClickCounter from "./components/ClickCounter";
import ClickButton from "./components/ClickButton";
const App = ({ counterFunc }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <ClickCounter counter={counter} />
      <ClickButton counterFunc={() => dispatch(counterFunc())} />
    </div>
  );
};

export default App;
