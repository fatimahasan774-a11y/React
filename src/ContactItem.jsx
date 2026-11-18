import { useContext } from "react";
import ContactContext from "./ContactContext";

const ContactItem = ({ contact }) => {
  const { dispatch } = useContext(ContactContext);

  return (
    <li>
      <strong>
        {contact.name} {contact.favorite && "⭐"}
      </strong>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => dispatch({ type: "favorite", payload: contact.id })}>
        {contact.favorite ? "Unfavorite" : "Favorite"}
      </button>
      <button onClick={() => dispatch({ type: "edit", payload: contact })}>
        Edit
      </button>
      <button onClick={() => dispatch({ type: "delete", payload: contact.id })}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;