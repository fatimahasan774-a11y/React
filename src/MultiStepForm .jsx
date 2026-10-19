import { useReducer } from "react";

const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  submitted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.field]: action.value };
    case "next":
      return { ...state, step: state.step + 1 };
    case "back":
      return { ...state, step: state.step - 1 };
    case "confirm":
      return { ...state, submitted: true };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: "update", field: e.target.name, value: e.target.value });
  };

  if (state.submitted) {
    return (
      <div>
        <h1>Multi-Step Registration</h1>
        <h2>Registration Complete!</h2>
        <p>
          Welcome, {state.firstName} {state.lastName}
        </p>
        <button onClick={() => dispatch({ type: "reset" })}>Start Over</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Multi-Step Registration</h1>

      {state.step === 1 && (
        <div>
          <h2>Step 1: Profile</h2>
          <div>
            First Name:
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
            />
          </div>
          <button onClick={() => dispatch({ type: "next" })}>Next</button>
        </div>
      )}

      {state.step === 2 && (
        <div>
          <h2>Step 2: Contact</h2>
          <div>
            Email:
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div>
            Phone:
            <input
              type="text"
              name="phone"
              value={state.phone}
              onChange={handleChange}
            />
          </div>
          <button onClick={() => dispatch({ type: "back" })}>Back</button>
          <button onClick={() => dispatch({ type: "next" })}>Next</button>
        </div>
      )}

      {state.step === 3 && (
        <div>
          <h2>Step 3: Review</h2>
          <p><strong>First Name:</strong> {state.firstName}</p>
          <p><strong>Last Name:</strong> {state.lastName}</p>
          <p><strong>Email:</strong> {state.email}</p>
          <p><strong>Phone:</strong> {state.phone}</p>
          <button onClick={() => dispatch({ type: "back" })}>Back</button>
          <button onClick={() => dispatch({ type: "confirm" })}>Confirm</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;