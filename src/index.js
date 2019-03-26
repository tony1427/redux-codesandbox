import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import log from "redux-logger";

import "./styles.css";

const initialState = {
  count: 0
};

const INCREMENT_ACTION = {
  type: "INCREMENT"
};

const DECREMENT_ACTION = {
  type: "DECREMENT"
};

const reducer = (prevState = initialState, action) => {
  console.log("Action received", action);
  switch (action.type) {
    case "INCREMENT":
      return { ...prevState, count: prevState.count + 1 };
    case "DECREMENT":
      return { ...prevState, count: prevState.count - 1 };
    default:
      console.log("Unexpected action received", action.type);
      return prevState;
  }
};

const store = createStore(reducer, applyMiddleware(log));

console.log("Initial state", store.getState());
store.dispatch(INCREMENT_ACTION);
store.dispatch(INCREMENT_ACTION);
console.log("After increments", store.getState());
store.dispatch(DECREMENT_ACTION);
console.log("After decrement", store.getState());

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
