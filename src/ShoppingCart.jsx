function ShoppingCart({ cart, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ${total.toFixed(2)}</p>

      <ul>
        {cart.map((item) => (
          <li key={item.cartId}>
            {item.name} - ${item.price.toFixed(2)}{" "}
            <button onClick={() => onRemove(item.cartId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;