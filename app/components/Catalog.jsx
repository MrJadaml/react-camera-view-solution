import Cameras from './Cameras';
import FilterControls from './FilterControls';
import React from 'react';

const Catalog = React.createClass({
  render() {
    return (
      <div className="col s12 m8">
        <FilterControls />
        <Cameras />
      </div>
    )
  }
});

export default Catalog;
