import useForm from "./useForm";

const ContactForm = () => {
  const { values, handleChange } = useForm({
    name: "",
    mother: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Custom Hook</h3>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Mother name:
          <input
            type="text"
            name="mother"
            value={values.mother}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;