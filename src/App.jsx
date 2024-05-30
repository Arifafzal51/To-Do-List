import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <div className="container">
        <h1 className="title text">Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input"
            placeholder="Add a new task"
          />
          <button onClick={handleAddTodo} className="add-button">
            Add
          </button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              {todo}
              <button
                onClick={() => handleDeleteTodo(index)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
