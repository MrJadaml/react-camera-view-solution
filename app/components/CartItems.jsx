import CartItem from './CartItem';
import React from 'react';

const CartItems = React.createClass({
  render() {
    const TEMPARRAY = [1,2];
    const cartItems = TEMPARRAY.map((item) => {
      return <CartItem />
    });

    return (
      <div>{ cartItems }</div>
    )
  }
});

export default CartItems;
