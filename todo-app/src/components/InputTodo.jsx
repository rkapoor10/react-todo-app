import { GrAdd } from 'react-icons/gr';
import { useState } from "react";
import { v4 } from "uuid";
import { useTodoList } from '../context-hooks/todoList-context';


export function InputTodo() {
  const {todoList ,setTodoList} = useTodoList()
  const [newInput, setInput] = useState("");
  const todoHandler = (e) => {
    e.preventDefault();
    const newList = [
      ...todoList,
      { todoId: v4(), title: newInput, isDone: false, isPin: false },
    ];
    setTodoList(newList);
    setInput("");
  };
  return (
    <>
      <input
        value={newInput}
        placeholder="Enter todo Here"
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button 
      onClick={todoHandler} 
      className="add-todo-btn btn-icon"
      >
      <GrAdd className="txt-m"/>
      </button>
    </>
  );
}
