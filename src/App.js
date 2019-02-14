import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = props => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>{count}</h1>

        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment Counter
        </button>

        <div>{count % 10 === 0 ? "Counter is divisible by 10" : null}</div>
      </header>
    </div>
  );
};

export default App;
