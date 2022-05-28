import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    return setCounter(counter + 1);
  }

  function decreaseCounter() {
    return setCounter(counter - 1);
  }

  return (
    <div className="App">
      <div>{counter}</div>
      <button id="increaser" onClick={increaseCounter}></button>
      <br></br>
      <button id="decreaser" onClick={decreaseCounter}></button>
    </div>
  );
}

export default App;
