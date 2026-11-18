import { useReducer } from "react";
import ContactContext from "./ContactContext";
import { reducer, initialState } from "./reducer";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      <div>
        <h1>Contact Management App</h1>
        <ContactForm />
        <ContactList />
      </div>
    </ContactContext.Provider>
  );
};

export default ContactApp;