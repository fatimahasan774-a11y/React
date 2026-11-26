// import ThailWind from "./thailWind";
// // import TodoApp from "./TodoApp";
// import Dashboard from "./Dashboard";
// import PreviousValueTracker from "./PreviousValueTracker";

// const App = () => {
//   return (
//     <div>
//       {/* <ThailWind /> */}
// {/* <TodoApp/> */}
// {/* <Dashboard/> */}
// <PreviousValueTracker/>
//     </div>
//   );
// };

// export default App;

// // App.jsx
// // import React, { useState } from 'react';
// // import ThemeContext from './ThemeContext';
// // import ThemedComponent from './ThemedComponent';

// // function App() {
// //   const [theme, setTheme] = useState('light');

// //   const toggleTheme = () => {
// //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
// //   };

// //   return (
// //     <ThemeContext.Provider value={theme}>
// //       <button onClick={toggleTheme}>
// //         Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
// //       </button>
// //       <ThemedComponent />
// //     </ThemeContext.Provider>
// //   );
// // }

// // export default App;



// // import { useState } from "react";
// // import ShoppingCart from "./ShoppingCart";

// // const products = [
// //   { id: 1, name: "Widget", price: 19.99 },
// //   { id: 2, name: "Gadget", price: 29.99 },
// // ];

// // function App() {
// //   const [cart, setCart] = useState([]);

// //   const addToCart = (product) => {
// //     setCart((prev) => [...prev, { ...product, cartId: Date.now() + Math.random() }]);
// //   };

// //   const removeFromCart = (cartId) => {
// //     setCart((prev) => prev.filter((item) => item.cartId !== cartId));
// //   };

// //   return (
// //     <div>
// //       {products.map((product) => (
// //         <div key={product.id}>
// //           <p>{product.name}</p>
// //           <p>Price: ${product.price.toFixed(2)}</p>
// //           <button onClick={() => addToCart(product)}>Add to Cart</button>
// //         </div>
// //       ))}

// //       <ShoppingCart cart={cart} onRemove={removeFromCart} />
// //     </div>
// //   );
// // }

// // export default App;






import { useState } from "react";

const countries = ["Somaliland", "Somalia", "Kenya", "Ethiopia", "Djibouti"];

const emptyForm = {
  username: "",
  email: "",
  password: "",
  country: "",
  subscribe: false,
};

function App() {
  const [formData, setFormData] = useState(emptyForm);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Soo bandhig xogta Console-ka
    console.log("Form submitted:", formData);
    console.table(formData);

    setSubmittedData(formData);
    setFormData(emptyForm);
  };

  const inputClass =
    "mt-1 block w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 ring-1 ring-zinc-900/5">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-8 text-center">
          Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-zinc-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
              minLength={6}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-zinc-700">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select a country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="subscribe"
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="subscribe" className="text-sm text-zinc-700">
              Subscribe to the newsletter
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>

        {submittedData && (
          <p className="mt-6 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
            Form submitted. Open the browser Console (F12) to see the data.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
