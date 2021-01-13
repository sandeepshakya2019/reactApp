import React, { useState } from "react";
import "../CSS/Basic.css";
import NextGen from "./NextGen";
// import NextGen from "./NextGen";

function Basic({ click, clickNo }) {
  const [basicclick, setBasicclick] = useState(0);
  const basicclickFunction = () => {
    // console.log(click);
    if (basicclick === 0) {
      // console.log("here");
      setBasicclick(1);
    } else if (basicclick === 1) {
      setBasicclick(0);
    }
  };
  if (basicclick === 1) {
    return <NextGen basicclickFunction={basicclickFunction} />;
  } else {
    return (
      <div>
        <center>
          <h1 className="heading">Welcome to the Basics of React</h1>
        </center>
        <div className="defination">
          <p className="define-heading">⭐ ReactJs</p>
          <br />
          <br />

          <p className="define-text">
            ReactJs is a JavaScript Library for buliding the User Interfaces
            (UI)
          </p>

          <p className="define-text">
            <b>JavaScript Library</b> Means they simply runs in browser. we
            don't have to wait the server response. It Let's you to compose the
            complex UI from Small and Isolated Piece of Code are called
            <b>"Components"</b>. These can be <b> Functional </b>
            or
            <b> Classbased </b>Components.
          </p>
          <p className="define-text">
            A React Components is a bit of code repersents a piece of page. Each
            Components have a JavaScript function that return a piece of code
            that repersents a piece of page
            <br />
            Main website of the React
            <br />
            <a href="https://reactjs.org/">https://reactjs.org/</a>
          </p>
        </div>
        <div className="explanation">
          <p className="define-heading ">
            ⭐ Add the React in HTML using JavaScript (Example Given Below)
          </p>
          <br />
          <br />
          <p className="define-text ">
            If we have a project which is already setup in HTML,CSS,JavaScript
            we can also add the React to that Project. Follow the ScreenShot. If
            you don't Understand the syntax yet don't worry we will cover in
            upcomping lessons.
          </p>
          <img
            alt="xcode"
            src="/Images/Illustration/exam1.jpg"
            className="example-image"
          />

          <br />
          <br />
          <p className="define-text ">
            Don't Forgot to add the script tag with the links given below
            <br />
            <a href="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js">
              https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js
            </a>
            <br />
            <a href="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js">
              https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js
            </a>
          </p>
          <p className="define-text ">
            After the App variable we have to render the app Components to the
            HTML Page which contain the element of id "app" . Code look like
            <br />
            <code>ReactDOM.render(app,document.querySelector("#app"))</code>
            <br />
            All of the React Components have a <b> Render functionality </b>
            which specifies the HTML output of a react Components written in JSX
            syntax.
            <b>"JSX Syntax"</b>
            is React-extension which allow writing the JavaScript code that look
            like HTML. HTML syntax is co-exist with JavaScript code. we can put
            the JavaScript expression with the braces. Example Given below. We
            also learn more about the JSX in upcomping lessons.
            <pre>
              {`            function Person({ name, age }) {
              return (
                <div className="person">
                  <h1>{name}</h1>
                  <h4>Age : {age}</h4>
                </div>
              );
            }`}
            </pre>
          </p>
        </div>
        <div className="defination">
          <p className="define-heading">⭐ There is two kind of Application</p>
          <p className="define-text">
            1) Single Page Application <br /> 2) Multiple Page Application
          </p>
          <p className="define-heading heading-two">Single Page Application </p>
          <p className="define-text">
            Only One HTML Page content (re)rendered to the Client Side.
          </p>
          <p className="define-heading heading-two">
            Multiple Page Application{" "}
          </p>
          <p className="define-text">
            Multiple content page content is rendered on server
          </p>
        </div>

        <buttton onClick={click} className="basic-button">
          Back to Main Page
        </buttton>
        <buttton
          onClick={basicclickFunction}
          className="basic-button"
          style={{ float: "right" }}
        >
          Next Page
        </buttton>
      </div>
    );
  }
}

export default Basic;
