import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "insert": {
      const newFruit = action.payload;
      return [...state, newFruit];
    }
    case "update": {
      const { oldFruit, newFruit } = action.payload;
      return state.map((fruit) => (fruit === oldFruit ? newFruit : fruit));
    }
    case "delete": {
      const fruitToDelete = action.payload;
      return state.filter((fruit) => fruit !== fruitToDelete);
    }
    default:
      return state;
  }
}

function InnoruSumma() {
  const initialFruits = ["Apple", "Banana", "Cherry"];
  const [state, dispatch] = useReducer(reducer, initialFruits);

  return (
    <div className="text-center" style={{ padding: "100px" }}>
      <h1>FRUITS APPLICATION</h1>
      <ul style={{ listStyleType: "none" }}>
        {state.map((fruit, index) => (
          <li className="h5" key={index}>
            {fruit}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          dispatch({ type: "insert", payload: "Strawberry" });
        }}
      >
        Insert
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "update",
            payload: {
              oldFruit: "Apple",
              newFruit: "Orange",
            },
          });
        }}
      >
        Update
      </button>
      <button
        onClick={() => {
          dispatch({ type: "delete", payload: "Banana" });
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default InnoruSumma;