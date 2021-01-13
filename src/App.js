import "./App.css";
import React, { useState } from "react";
import Basic from "./Components/Javascript/Basic";
// import NextGen from "./Components/Javascript/NextGen.js";

function App() {
  const [click, setClick] = useState(0);
  const clickFunction = () => {
    console.log(click);
    if (click === 0) {
      // console.log("here");
      setClick(1);
    } else if (click === 1) {
      setClick(0);
    }
  };
  if (click === 1) {
    return <Basic click={clickFunction} clickNo={click} />;
  } else {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <h1 style={{ marginBottom: "50px", color: "orange" }}>
              Single Page Application{" "}
            </h1>
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
