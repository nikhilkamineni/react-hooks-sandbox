import React, { useState, useEffect } from "react";
import "./App.css";

const App = props => {
  const [count, setCount] = useState(0);

  const [countMilestone, setCountMilestone] = useState(false);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  });

  useEffect(() => {
    if (count % 10 === 0 && count !== 0) setCountMilestone(true);
    else setCountMilestone(false);
  });

  return (
    <div className="App">
      <header className="App-header">

        <h1>Count: {count}</h1>

        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment Counter
        </button>

        <div>{countMilestone ? "We hit a milestone!" : "Keep going..."}</div>
      </header>
    </div>
  );
};

export default App;
