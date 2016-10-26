import Cart from './Cart';
import Catalog from './Catalog';
import React from 'react';
import ShopHeader from './ShopHeader';

const App = React.createClass({
  render() {
    return (
      <div className="container">
        <ShopHeader />
        <div className="row">
          <Catalog />
          <Cart />
        </div>
      </div>
    )
  }
});

export default App;
