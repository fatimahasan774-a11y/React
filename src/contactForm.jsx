import { useState, useEffect, useContext } from "react";
import ContactContext from "./ContactContext";

const emptyForm = { name: "", email: "", phone: "" };

const ContactForm = () => {
  const [form, setForm] = useState(emptyForm);
  const { state, dispatch } = useContext(ContactContext);
  const { editingContact } = state;

  // Marka Edit la riixo, form-ka ku buuxi xogta contact-ka
  useEffect(() => {
    if (editingContact) {
      setForm({
        name: editingContact.name,
        email: editingContact.email,
        phone: editingContact.phone,
      });
    } else {
      setForm(emptyForm);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.trim() === "") return;

    if (editingContact) {
      dispatch({
        type: "update",
        payload: { id: editingContact.id, ...form },
      });
    } else {
      dispatch({
        type: "add",
        payload: { id: Date.now(), ...form, favorite: false },
      });
    }
    setForm(emptyForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingContact ? "Edit Contact" : "Add New Contact"}</h2>
      <div>
        Name:
        <input name="name" value={form.name} onChange={handleChange} />
      </div>
      <div>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        Phone:
        <input name="phone" value={form.phone} onChange={handleChange} />
      </div>
      <button type="submit">{editingContact ? "Update" : "Add"}</button>
      {editingContact && (
        <button type="button" onClick={() => dispatch({ type: "cancelEdit" })}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default ContactForm;