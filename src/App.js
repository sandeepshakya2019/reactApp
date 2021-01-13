import "./App.css";
import React, { useState } from "react";
import Basic from "./Components/Basic";

function App() {
  const [click, setClick] = useState(false);
  const clickFunction = () => {
    console.log(click);
    if (click === false) {
      console.log("here");
      setClick(true);
    } else if (click === true) {
      setClick(false);
    }
  };
  if (click) {
    return <Basic />;
  } else {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <h1 style={{ marginBottom: "50px" }}>Single Page Application </h1>
            <h2 style={{ marginBottom: "50px" }}>
              Welcome to the React Complete Guide
            </h2>
            <button onClick={clickFunction} className="App-button">
              Click to Start
            </button>
          </header>
        </div>
      </>
    );
  }
}

export default App;
