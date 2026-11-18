
import { useReducer, useState } from "react";

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
        text: text.trim(),
        completed: false,
      };

      dispatch({ type: "add", payload: newTodo });
      setText("");
    }
  };

  return (
    <div className="min-h-screen bg-[#e9e7ff] flex justify-center items-center p-5">

      {/* Main Container */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          My Todo List
        </h2>

        {/* Input Row */}
        <div className="flex gap-2 mb-7">

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="Add a new todo..."
            className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
          />

          <button
            onClick={handleAdd}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-7 rounded-lg transition duration-200"
          >
            Add
          </button>

        </div>

        {/* Todo List */}
        <ul className="space-y-3">

          {state.map((todo) => (
            <li
              key={todo.id}
              className="group flex items-center justify-between gap-3 bg-slate-50 hover:bg-slate-100 rounded-xl px-4 py-4 transition"
            >

              <div className="flex items-center gap-3 min-w-0">

                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    dispatch({
                      type: "toggle",
                      payload: todo.id,
                    })
                  }
                  className="w-5 h-5 accent-blue-600 cursor-pointer shrink-0"
                />

                {/* Todo Text */}
                <span
                  className={`break-words ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </span>

              </div>

              {/* Delete Button */}
              <button
                onClick={() =>
                  dispatch({
                    type: "delete",
                    payload: todo.id,
                  })
                }
                className="text-red-600 font-medium hover:text-red-800 opacity-0 group-hover:opacity-100 focus:opacity-100 transition shrink-0"
              >
                Delete
              </button>

            </li>
          ))}

        </ul>

        {/* Empty Message */}
        {state.length === 0 && (
          <p className="text-center text-gray-400 py-5">
            No todos yet. Add your first task!
          </p>
        )}

      </div>
    </div>
  );
};

export default TodoApp;
