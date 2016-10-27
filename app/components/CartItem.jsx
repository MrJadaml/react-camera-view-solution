import React from 'react';

const CartItem = React.createClass({
  render() {
    return (
      <li className="collection-item">
        <div>
          {this.props.camera.qty} <strong>{this.props.camera.title}</strong>
          <a className="secondary-content" href="#"><i className="material-icons">delete</i></a>
        </div>
      </li>
    )
  }
});

export default CartItem;
