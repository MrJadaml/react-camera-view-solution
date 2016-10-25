import CartItems from './CartItems';
import React from 'react';

const Cart = React.createClass({
  render() {
    return (
      <div>
        <h5>Your Cart</h5>
        <CartItems />
        <div>
          <p>Subtotal</p>
          <p>$0.00</p>
        </div>
        <div>
          <p>Tax</p>
          <p>$0.00</p>
        </div>
        <div>
          <p>Total</p>
          <p>$0.00</p>
        </div>
        <button>CHECKOUT</button>
      </div>
    )
  }
});

export default Cart;
