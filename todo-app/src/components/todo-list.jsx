import { Todo } from "./todo";
import { InputTodo } from "./InputTodo";
export function TodoList() {
  
  return (
    <>
      <InputTodo />
      <Todo />
      {/* <PinnedTodo/> */}
      {/* <CompletedTodo/> */}
    </>
  );
}
