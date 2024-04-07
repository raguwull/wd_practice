import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
};

ReactDOM.render(
  <h1 style={customStyle}>hello from the other side</h1>,
  document.getElementById("root")
);
