import { useState } from "react"

const TodoList=()=>{

    const [Todos, setTodos] = useState([])
    const [inputValue,setInputValue] =useState ("");

    const handleTodoAdd=()=>{

         const newTodo= {
            id: crypto.randomUUID(),
            text: inputValue,
            completed: false
         }

         setTodos([...Todos, newTodo])
         setInputValue("")
    }

    return ( <div>
        <h1>Todo list</h1>
        <input 
        type="text" 
         placeholder="enter new todo"
         onChange={(e)=> setInputValue(e.target.value)}
         value={inputValue}
          />
        <button  onClick={handleTodoAdd}>Add</button>

        <ul>
            {
                Todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
                ))
            }
            </ul>
    </div>
    )
}



export  default TodoList;