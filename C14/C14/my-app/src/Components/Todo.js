import React, { useState } from "react";
import TodoF from "./TodoF";
import TodoList from "./TodoList";

function Todo({ todos, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complet" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
    </div> 
  ));
}

export default Todo;
