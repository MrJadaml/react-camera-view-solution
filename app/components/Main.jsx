import Checkout from './Checkout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Match } from 'react-router';
import Home from './Home';

const Main = React.createClass({
  getInitialState() {
    return {
      cart: [],
      cameras: [
        {
          id: 1,
          title: 'Nikon D3100 DSLR',
          image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
          rating: 4,
          price: 369.99,
          onSale: true
        }, {
          id: 2,
          title: 'Canon EOS 70D',
          image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
          rating: 2,
          price: 1099.0,
          onSale: false
        }, {
          id: 3,
          title: 'Nikon D810A',
          image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
          rating: 3,
          price: 3796.95,
          onSale: true
        }
      ]
    }
  },

  handleAddToCart(camera) {
    let cart;
    let cameraMatch;
    let cartCamera;

    const cartSubMatch = this.state.cart.filter((item) => {
      if (item.id !== camera.id) {
        return true;
      }

      cameraMatch = item;
    });

    if (cameraMatch) {
      cartCamera = Object.assign({}, cameraMatch, { qty: ++cameraMatch.qty });
    } else {
      cartCamera = Object.assign({}, camera, { qty: 1 });
    }

    cart = cartSubMatch.concat(cartCamera);
    this.setState({ cart });
  },

  handleRemoveAllFromCart(cameraId) {
    const cart = this.state.cart.filter((item) => item.id !== cameraId);

    this.setState({ cart });
  },

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="container">
            <Match pattern="/" exactly render={
              () => <Home
                { ...this.state }
                handleAddToCart={this.handleAddToCart}
                handleRemoveAllFromCart={this.handleRemoveAllFromCart}
              />
            }/>
            <Match pattern="/cart" render={
              () => <Checkout
                cart={this.state.cart}
              />
            } />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
});

export default Main;
