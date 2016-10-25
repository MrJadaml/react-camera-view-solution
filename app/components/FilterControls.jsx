import React from 'react';

const FilterControls = React.createClass({
  render() {
    return (
      <div>
        <input type="text" placeholder="Search here"/>
        <select>
          <option>Name</option>
          <option>Rating</option>
        </select>
      </div>
    )
  }
});

export default FilterControls;
