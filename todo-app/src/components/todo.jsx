import { DoneBtn } from "./DoneBtn";
import { PinBtn } from "./PinBtn";
import { DeleteBtn } from "./DeleteBtn";

export function Todo({todoInput}) {
  
  return (
    <>
        {todoInput.map((todo) => {
          return (
            <li key={todo.todoId}>
              {todo.title}
              <DoneBtn />
              <PinBtn />
              <DeleteBtn />
            </li>
          );
        })}
    </>
  );
}
