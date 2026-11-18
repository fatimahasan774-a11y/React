import { useReducer, useState } from "react";
import styles from "./TodoApp.module.css";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: "add", payload: newTodo });
      setText("");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Todo App</h2>

      <div className={styles.inputRow}>
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button className={styles.addButton} onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul className={styles.list}>
        {state.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <span
              className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
              onClick={() => dispatch({ type: "toggle", payload: todo.id })}
            >
              {todo.text}
            </span>
            <button
              className={styles.deleteButton}
              onClick={() => dispatch({ type: "delete", payload: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;