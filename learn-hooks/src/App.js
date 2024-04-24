import React, {useState} from "react";

var count = 0;

function App() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  }

  function decrement(){
    setCount(count - 1);
  }

  return (
    <center>
      <div className="main-div">
        <h1 id="count-div">{count}</h1>
        <button className="dec-button" onClick={decrement}>-</button>
        <button className="inc-button" onClick={increment}>+</button>
      </div>
    </center>
  );
}

export default App;
