import React from "react";

function ReactPractical({ nextgenclickFunction }) {
  return (
    <div>
      <>
        <buttton
          onClick={nextgenclickFunction}
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
        <center>
          <h1 className="heading fixed" id="top">
            React Practical Session
          </h1>
        </center>
        <div className="margin"></div>
        <div className="defination">
          <p className="define-heading">React Practical</p>
          <br />
          <br />
          <p className="define-text">
            We are going to do some live Practical Demonstration to learn more
            about the react
          </p>
        </div>
        <buttton onClick={nextgenclickFunction} className="basic-button">
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
      <a href="#top" className="fix">
        ⏫
      </a>
    </div>
  );
}

export default ReactPractical;
