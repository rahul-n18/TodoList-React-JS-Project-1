import React from "react";
import "./App.css";

function TodoList({ todos, onAddTodo, onTodoToggle }) {
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      onAddTodo(event.target.value); //calls onAddTodo
      event.target.value = "";
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} {todo.completed ? "✅" : ""}
          <button onClick={() => onTodoToggle(todo.id)}>Toggle</button>
        </li>
      ))}
      <li>
        <input
          type="text"
          placeholder="Add Todo"
          onKeyDown={handleInputKeyDown}
        />
      </li>
    </ul>
  );
}

export default TodoList;
