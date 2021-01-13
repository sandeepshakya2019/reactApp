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
        <buttton
          onClick={basicclickFunction}
          className="simple-nav-button btn-fixed-left"
        >
          ⏪
        </buttton>
        <buttton
          onClick={nextgenclickFunction}
          className="simple-nav-button btn-fixed-right"
          style={{ float: "right" }}
        >
          ⏩
        </buttton>
        <center id="top">
          <h1 className="heading fixed ">Next Genration Syntax</h1>
        </center>
        <div className="margin"></div>
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
              Link to Hoisiting
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
            Arrow function is new syntax to declare the function expression in
            ES6 Syntax. Syntax is given below
            <br />
            <br />
            Simple Function
            <br />
            <code>{"function printName() {console.log('React Basics')}"}</code>
            <br />
            ES6 syntax
            <br />
            <code>
              {"const printName = () => {console.log('React Basics')}"}
            </code>
            <br />
            Passing the Parameter in Function
            <br />
            <code>{"function printName(name) {console.log(name)}"}</code>
            <br />
            ES6 syntax
            <br />
            <code>{"const printName = (name) => {console.log(name)}"}</code>
            <br />
            Passing More than one Parameter in Function and Return something
            <br />
            <code>
              {"function printName(name,age) {return `${name} ${age}`}"}
            </code>
            <br />
            In ES6 syntax don't need to write the return syntax for simple line
            <br />
            <code>{"const printName = (name,age) => {`${name} ${age}`}"}</code>
          </p>
        </div>
        <div className="defination" id="spread">
          <p className="define-heading"> ⭐ Spread Operator</p>
          <br />
          <br />
          <p className="define-text">
            In JavaScript, spread syntax refers to the use of an ellipsis of
            three dots ( … ) to expand an iterable object into the list of
            arguments
            <br />
            <code>
              const newArr = [...oldArr,2,3] you can do same with object
            </code>
          </p>
        </div>

        <div className="defination">
          <p className="define-heading"> ⭐ Destructring</p>
          <br />
          <br />
          <p className="define-text">
            The destructuring assignment syntax is a JavaScript expression that
            makes it possible to unpack values from arrays, or properties from
            objects, into distinct variables
            <br />
            <code>
              [a,b] = ["hello", "max"]
              <br />
              console.log(a) // It prints the "hello"
              <br /> console.log(b) // It prints the "Max"
              <br /> you can do same with object
            </code>
          </p>
        </div>
        <div className="defination">
          <p className="define-heading">
            ⭐ Pass by Value and Pass by Refrence
          </p>
          <br />
          <br />
          <p className="define-text">
            The array and object are pass by the Refrence and the variables is
            passed by the value. if you want to copy the array and object to
            another variable use the <a href="#spread">spread operator</a>
            <br />
            <code>
              const num = 1 <br />
              const num2 = num // Here this is pass by value
              <br />
              const num = {"{object}"} <br />
              const num2 = num // Here the object is passed by refrence when we
              change in one oject value of both the object changes
            </code>
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
        <a href="#top" className="fix">
          ⏫
        </a>
      </>
    );
  }
}

export default NextGen;
