import CartItem from './CartItem';
import React from 'react';

const CartItems = React.createClass({
  render() {
    const cartItems = this.props.cart.map((item) => {
      return <CartItem camera={item}/>
    });

    return (
      <div>{ cartItems }</div>
    )
  }
});

export default CartItems;
