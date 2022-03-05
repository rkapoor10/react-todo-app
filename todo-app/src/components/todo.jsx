import { DoneBtn } from "./DoneBtn";
import { PinBtn } from "./PinBtn";
import { DeleteBtn } from "./DeleteBtn";
import { useTodoList } from "../context-hooks/todoList-context";

export function Todo() {
  const {todoList} = useTodoList()
  return (
    <>
      <h2>Todo List</h2>
      <ul className="grid-column-layout">
        {todoList.map((todo) => {
          return (
            <li key={todo.todoId} className="card-container-horizontal">
              <div>
              <div className="space-between">
                <div className="flex-txt">
                  <h3>Title:{todo.title}</h3>
                  <p className="title-small txt-s">category</p>
                  
                </div>

                <PinBtn/>
              </div>
              <div class="todo-tags bg-baseblue">P0</div>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <div className="space-between">
                <DoneBtn />
                <DeleteBtn />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
