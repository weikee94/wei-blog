import React, { useState } from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import WeiBlog from "./components/WeiBlog";
import "./styles/styles.scss";
import "./firebase/firebase";

const App = props => {
  // count 就是current state
  // setCount 就是setState function
  // useState(props.count) 這裏的0就是initital state
  const [count, setCount] = useState(props.count);
  const increment = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      {count}
      <button onClick={increment}>plus</button>
      <button onClick={minus}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

App.defaultProps = {
  count: 10
};

// ReactDOM.render(<App />, document.getElementById("app"));

ReactDOM.render(<AppRouter />, document.getElementById("app"));
