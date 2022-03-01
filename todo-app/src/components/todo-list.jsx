import { Todo } from "./todo";
import { InputTodo } from "./InputTodo";
import { useState } from "react";
export function TodoList() {
  const [todoInput, setTodoInput] = useState([]);
  return (
    <>
      <InputTodo todoInput={todoInput} setTodoInput={setTodoInput} />
      <h2>Todo List</h2>
      <ul>
        <Todo todoInput={todoInput}/>
      </ul>
    </>
  );
}
