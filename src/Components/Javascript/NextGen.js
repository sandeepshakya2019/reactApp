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
          <p className="define-heading"> ⭐ ES6 Syntax</p>
          <br />
          <br />
          <p className="define-text">
            We are going to study about the some ES6 Syntax in this Section
          </p>
        </div>
        <div className="defination">
          <p className="define-heading"> ⭐ Let and Const</p>
          <br />
          <br />
          <p className="define-text">
            Let and Const is new way to declare the variable in ES6 Syntax. Here
            let keyword is used when we want to use the variable and Const
            keyword used when we have to define the constant value
          </p>
          <p className="define-text">
            1) Let and Const doesn't support Hoisiting and var keyword does if
            you want to learn more about the Hoisiting i will leave the link for
            you below of W3 schools
            <br />
            <a href="https://www.w3schools.com/js/js_hoisting.asp">
              https://www.w3schools.com/js/js_hoisting.asp
            </a>
            <br />
            2) Can acces with in the Block (Block Scope ) unlike var keyword
          </p>
        </div>
        <div className="defination">
          <p className="define-heading"> ⭐ Arrow Function</p>
          <br />
          <br />
          <p className="define-text">
            Let and Const is new way to declare the variable in ES6 Syntax. Here
            let keyword is used when we want to use the variable and Const
            keyword used when we have to define the constant value
          </p>
          <p className="define-text">
            1) Let and Const doesn't support Hoisiting and var keyword does if
            you want to learn more about the Hoisiting i will leave the link for
            you below of W3 schools
            <br />
            <a href="https://www.w3schools.com/js/js_hoisting.asp">
              https://www.w3schools.com/js/js_hoisting.asp
            </a>
            <br />
            2) Can acces with in the Block (Block Scope ) unlike var keyword
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
