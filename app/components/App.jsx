import Cart from './Cart';
import Catalog from './Catalog';
import React from 'react';
import ShopHeader from './ShopHeader';

const App = React.createClass({
  render() {
    return (
      <div>
        <ShopHeader />
        <Catalog />
        <Cart />
      </div>
    )
  }
});

export default App;
