import { createContext, useContext, useState } from "react";
const defaultContextValue = []

// create context
const TodoListContext = createContext(defaultContextValue)

// provide context
const TodoListProvider = ({children})=>{
    const [todoList, setTodoList] = useState([]);
    return(
        <TodoListContext.Provider value={{todoList,setTodoList}}>
            {children}
        </TodoListContext.Provider>
    )
}


// use context
const useTodoList = ()=>useContext(TodoListContext)

export {TodoListProvider,useTodoList}
