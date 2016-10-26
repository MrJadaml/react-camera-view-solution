import React from 'react';

const CartItem = React.createClass({
  handleRemoveAll() {
    console.log('delete all items');
  },

  render() {
    return (
      <li className="collection-item">
        <div>
          camera.qty | <strong>camera.title</strong>
          <a className="secondary-content" onClick={this.handleRemoveAll} href="#"><i className="material-icons">delete</i></a>
        </div>
      </li>
    )
  }
});

export default CartItem;
