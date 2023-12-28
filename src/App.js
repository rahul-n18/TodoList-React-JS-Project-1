import React, { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo Sample", completed: true },
  ]);

  //event handlers
  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
  };

  const handleAddTodoToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoList
        todos={todos}
        onAddTodo={handleAddTodo}
        onTodoToggle={handleAddTodoToggle}
      />
    </div>
  );
}

export default App;
