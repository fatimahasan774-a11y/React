import { useContext } from "react";
import ContactContext from "./ContactContext";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const { state } = useContext(ContactContext);

  return (
    <div>
      <h2>Contacts</h2>
      {state.contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        <ul>
          {state.contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;