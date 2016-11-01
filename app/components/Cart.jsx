import CartItems from './CartItems';
import React from 'react';

const Cart = React.createClass({
  getInitialState() {
    return {
      subtotal: 0,
      tax: 0,
      total: 0
    }
  },

  componentWillReceiveProps(nextProps) {
    let subtotal = parseFloat(this.state.subtotal);
    let tax = 0;
    let taxRate = 0.07;
    let total = 0;

    if (nextProps.cart.length === 0) {
      return this.setState({
        subtotal: 0,
        tax: 0,
        total: 0
      });
    }

    for (let option of nextProps.cart) {
      subtotal = subtotal + option.price * option.qty;
    }

    tax = (subtotal * taxRate).toFixed(2);
    total = (subtotal + parseFloat(tax)).toFixed(2);
    subtotal = subtotal.toFixed(2);

    this.setState({ subtotal, tax, total });
  },

  render() {
    return (
      <div className="col s12 m4">
        <div className="card blue-grey">
          <div className="card-content white-text">
            <span className="card-title">Your Cart</span>
            <CartItems
              cart={this.props.cart}
              handleRemoveAllFromCart={this.props.handleRemoveAllFromCart}
            />
            <div className="row">
              <div className="col s6">
                Subtotal
              </div>
              <div className="col s6 right-align">
                ${this.state.subtotal}
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                Tax
              </div>
              <div className="col s6 right-align">
                ${this.state.tax}
              </div>
            </div>
            <div className="row total">
              <div className="col s6">
                Total
              </div>
              <div className="col s6 right-align">
                ${this.state.total}
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
