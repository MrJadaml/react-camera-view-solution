import CartItem from './CartItem';
import React from 'react';

const CartItems = React.createClass({
  render() {
    const cartItems = this.props.cart.map((item, index) => {
      return <CartItem
        camera={item}
        key={index}
        handleRemoveAllFromCart={this.props.handleRemoveAllFromCart}
      />
    });

    return (
      <div>{ cartItems }</div>
    )
  }
});

export default CartItems;
