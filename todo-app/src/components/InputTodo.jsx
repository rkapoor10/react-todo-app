import { useState } from "react";
import { v4 } from "uuid";
export function InputTodo({ todoInput, setTodoInput }) {
  const [newInput, setInput] = useState("");
  const todoHandler = (e) => {
    e.preventDefault();
    const newList = [
      ...todoInput,
      { todoId: v4(), title: newInput, isDone: false, isPin: false },
    ];
    setTodoInput(newList);
    setInput("");
  };
  return (
    <>
      <input
        value={newInput}
        placeholder="Enter todo Here"
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button onClick={todoHandler}>Put Todo</button>
    </>
  );
}
