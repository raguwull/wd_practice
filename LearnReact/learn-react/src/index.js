import React from "react";
import ReactDOM from "react-dom";

const name = "Ragul";
const lname = "B"
function App() {
  return (
    <div>
      <h1>Hello, {name + " " + lname}</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
