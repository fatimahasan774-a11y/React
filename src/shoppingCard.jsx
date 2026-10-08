import { useState } from "react";

const ShoppingCard = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleProductAdd = () => {
    if (productName.trim() !== "" && productPrice.trim() !== "") {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
        quantity: 1,
      };

      setProducts([...products, newProduct]);
      setProductName("");
      setProductPrice("");
    }
  };

  const removeProduc=(id)=>{
    const updatedProduct= products.filter(product => product.id !== id);
    setProducts  (updatedProduct);
  }

  const productIncreas=(id)=>{
const updatedProduct= products.map( product => (
  product.id === id ? {...product , quantity: product.quantity + 1}: product
))
setProducts(updatedProduct);

  }

  const Prouductdecreas=(id)=>{
    const updatedProduct= products.map(product =>(
      product.id === id && product.quantity > 1 ?{...product, quantity: product.quantity - 1}: product
    ))
    setProducts(updatedProduct);
  }

  return (
    <div>
      <h1>Simple Shopping Card</h1>
      <div>
        <h2>Add a Product Cart</h2>
        <input
          type="text"
          placeholder="product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <input
          type="number"
          min="0"
          placeholder="product price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <button onClick={handleProductAdd}>add to cart</button>
      </div>

      {products.length > 0 ? (
        <div>
          <h3>Products in cart</h3>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price.toFixed(2)}

                <div>
                  Quantity:
                  <button onClick={()=> Prouductdecreas(product.id)}>-</button>
                  {product.quantity}
                  <button  onClick={()=> productIncreas(product.id)}>+</button><br />
                  <button onClick={()=>removeProduc(product.id)}>remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h3>this cart is empty</h3>
      )}
    </div>
  );
};

export default ShoppingCard;