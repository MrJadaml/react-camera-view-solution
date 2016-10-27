import CartItems from './CartItems';
import React from 'react';

const Cart = React.createClass({
  render() {
    return (
      <div className="col s12 m4">
        <div className="card blue-grey">
          <div className="card-content white-text">
            <span className="card-title">Your Cart</span>
            <ul className="collection black-text">
              <CartItems
                cart={this.props.cart}
                handleRemoveAllFromCart={this.props.handleRemoveAllFromCart}
              />
            </ul>
            <div className="row">
              <div className="col s6">
                Subtotal
              </div>
              <div className="col s6 right-align">
                $0.00
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                Tax
              </div>
              <div className="col s6 right-align">
                $0.00
              </div>
            </div>
            <div className="row total">
              <div className="col s6">
                Total
              </div>
              <div className="col s6 right-align">
                $0.00
              </div>
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light btn">CHECKOUT</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Cart;
