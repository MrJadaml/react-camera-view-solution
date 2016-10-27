import Cart from './Cart';
import Catalog from './Catalog';
import React from 'react';
import ShopHeader from './ShopHeader';

const App = React.createClass({
  getInitialState() {
    return {
      cart: [
        {
          title: 'Nikon D3100 DSLR',
          image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
          rating: 4,
          price: 369.99,
          onSale: true,
          qty: 3
        }
      ],
      cameras: [
        {
          title: 'Nikon D3100 DSLR',
          image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
          rating: 4,
          price: 369.99,
          onSale: true
        }, {
          title: 'Canon EOS 70D',
          image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
          rating: 2,
          price: 1099.0,
          onSale: false
        }, {
          title: 'Nikon D810A',
          image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
          rating: 3,
          price: 3796.95,
          onSale: true
        }
      ]
    }
  },

  render() {
    return (
      <div className="container">
        <ShopHeader />
        <div className="row">
          <Catalog cameras={this.state.cameras} />
          <Cart cart={this.state.cart}/>
        </div>
      </div>
    )
  }
});

export default App;
