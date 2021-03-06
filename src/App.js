import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

const TOP_STORIES_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";

const App = () => {
  // Fetch Top Stories logic
  const [topStories, setTopStories] = useState([]);
  useEffect(() => {
    fetchTopStories();
  }, []);

  async function fetchTopStories() {
    const response = await axios.get(TOP_STORIES_URL);
    const allStories = Object.values(response.data);
    setTopStories(allStories.slice(0, 10));
  };


  // Counter logic
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Counter: ${count}`;
  });

  const [milestone, setmilestone] = useState(false);
  useEffect(() => {
    if (count % 10 === 0 && count !== 0) setmilestone(true);
    else setmilestone(false);
  });


  // Return JSX
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

        <div>{milestone ? "We hit a milestone!" : "Keep going..."}</div>

        <ul>
          <h2>Top Stories ID's</h2>
          {topStories.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
