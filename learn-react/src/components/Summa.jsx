import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add-todo": {
      const newTodo = action.payload;
      return {
        ...state,
        count: state.count + 1,
        todos: [...state.todos, newTodo],
      };
    }
    case "del-todo": {
      const deleteIndex = action.payload;
      const newTodoList = state.todos.filter((_, index) => index !== deleteIndex);
      return {
        ...state,
        count: state.count - 1,
        todos: newTodoList,
      };
    }
  }
}

function Summa() {
  const initialState = {
    count: 0,
    todos: [],
  };
  const [currentTodo, setCurrentTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    dispatch({ type: "add-todo", payload: currentTodo });
    setCurrentTodo("");
  };

  const handleDeleteTodo = (index) => {
    dispatch({ type: "del-todo", payload: index });
  };

  return (
    <div className="text-center" style={{ padding: "100px" }}>
      <h1>TODO APPLICATION</h1>
      <h5>Total number of todos: {state.count}</h5>
      <form onSubmit={handleAddTodo} style={{ padding: "20px" }}>
        <input
          placeholder="Enter a new todo"
          onChange={handleInputChange}
          value={currentTodo}
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ listStyleType: "none" }}>
        {state.todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo} <button onClick={() => handleDeleteTodo(index)}>-</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Summa;