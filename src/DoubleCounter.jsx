import { useReducer } from "react";

const initialState = { a: 0, b: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementA":
      return { ...state, a: state.a + 1 };
    case "decrementA":
      return state.a > 0 ? { ...state, a: state.a - 1 } : state;
    case "incrementB":
      return { ...state, b: state.b + 1 };
    case "decrementB":
      return state.b > 0 ? { ...state, b: state.b - 1 } : state;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const DoubleCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Double Counter</h1>

      <h2>Counter A: {state.a}</h2>
      <button
        onClick={() => dispatch({ type: "decrementA" })}
        disabled={state.a === 0}
      >
        - A
      </button>
      <button onClick={() => dispatch({ type: "incrementA" })}>+ A</button>

      <h2>Counter B: {state.b}</h2>
      <button
        onClick={() => dispatch({ type: "decrementB" })}
        disabled={state.b === 0}
      >
        - B
      </button>
      <button onClick={() => dispatch({ type: "incrementB" })}>+ B</button>

      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset Both</button>
    </div>
  );
};

export default DoubleCounter;