import ThailWind from "./thailWind";
// import TodoApp from "./TodoApp";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div>
      {/* <ThailWind /> */}
{/* <TodoApp/> */}
<Dashboard/>
    </div>
  );
};

export default App;

// App.jsx
// import React, { useState } from 'react';
// import ThemeContext from './ThemeContext';
// import ThemedComponent from './ThemedComponent';

// function App() {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={theme}>
//       <button onClick={toggleTheme}>
//         Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//       </button>
//       <ThemedComponent />
//     </ThemeContext.Provider>
//   );
// }

// export default App;



// import { useState } from "react";
// import ShoppingCart from "./ShoppingCart";

// const products = [
//   { id: 1, name: "Widget", price: 19.99 },
//   { id: 2, name: "Gadget", price: 29.99 },
// ];

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prev) => [...prev, { ...product, cartId: Date.now() + Math.random() }]);
//   };

//   const removeFromCart = (cartId) => {
//     setCart((prev) => prev.filter((item) => item.cartId !== cartId));
//   };

//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product.id}>
//           <p>{product.name}</p>
//           <p>Price: ${product.price.toFixed(2)}</p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}

//       <ShoppingCart cart={cart} onRemove={removeFromCart} />
//     </div>
//   );
// }

// export default App;