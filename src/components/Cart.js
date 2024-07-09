import React from 'react';
import '../App.css';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="container">
      <h1>Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => removeFromCart(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => alert('Proceed to payment')}>Proceed to Pay</button>
    </div>
  );
};

export default Cart;
