import React from 'react';

const FilterControls = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="input-field col s8">
          <input type="text" placeholder="Search here" />
        </div>
        <div className="input-field col s4">
          <select>
            <option>Name</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
    )
  }
});

export default FilterControls;
