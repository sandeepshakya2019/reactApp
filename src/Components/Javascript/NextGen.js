import React, { useState } from "react";
import ReactPractical from "./ReactPractical";

function NextGen({ basicclickFunction }) {
  const [nextgenclick, setNextgenclick] = useState(0);
  const nextgenclickFunction = () => {
    console.log("next");
    console.log(nextgenclick);
    if (nextgenclick === 0) {
      // console.log("here");
      setNextgenclick(1);
    } else if (nextgenclick === 1) {
      setNextgenclick(0);
    }
  };

  if (nextgenclick === 1) {
    return <ReactPractical nextgenclickFunction={nextgenclickFunction} />;
  } else {
    return (
      <>
        <center>
          <h1 className="heading">Next Genration Syntax</h1>
        </center>
        <div className="defination">
          <p className="define-heading">ES6 Syntax</p>
          <br />
          <br />
          <p className="define-text">
            We are going to study about the some ES6 Syntax in this Section
          </p>
        </div>
        <buttton onClick={basicclickFunction} className="basic-button">
          Prev Page
        </buttton>
        <buttton
          onClick={nextgenclickFunction}
          className="basic-button"
          style={{ float: "right" }}
        >
          Next Page
        </buttton>
      </>
    );
  }
}

export default NextGen;
