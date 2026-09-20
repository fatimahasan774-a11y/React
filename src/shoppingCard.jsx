import { useState } from "react";

const ShoppingCard = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    if (name.trim() === "" || price === "") return;

    const newProduct = {
      id: crypto.randomUUID(),
      name: name,
      price: parseFloat(price),
      quantity: 1,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  };

  const increaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h1>Simple Shopping Cart</h1>

      <h2>Add a Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add to Cart</button>

      <h2>Products in Cart</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price.toFixed(2)}
            <br />
            Quantity:
            <button onClick={() => decreaseQuantity(product.id)}>-</button>
            {product.quantity}
            <button onClick={() => increaseQuantity(product.id)}>+</button>
            <br />
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCard;