import Cameras from './Cameras';
import FilterControls from './FilterControls';
import React from 'react';

const Catalog = React.createClass({
  render() {
    return (
      <div>
        <FilterControls />
        <Cameras />
      </div>
    )
  }
});

export default Catalog;
