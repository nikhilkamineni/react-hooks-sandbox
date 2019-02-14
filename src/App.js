import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = props => {
  const [state, setState] = useState(0);
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

        <h1>{state}</h1>

        <button onClick={() => {setState(state + 1)}}>Increment Counter</button>

      </header>
    </div>
  );
};

export default App;
