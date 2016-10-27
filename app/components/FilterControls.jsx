import React from 'react';

const FilterControls = React.createClass({
  handleSearch(event) {
    const searchText = event.target.value;

    this.props.handleSearch(searchText);
  },

  handleSort(event) {
    console.log('Temporarily Out of Order');
  },

  render() {
    return (
      <div className="row">
        <div className="input-field col s8">
          <input
            type="text"
            value={this.props.search}
            onChange={this.handleSearch}
            placeholder="Search here"
          />
        </div>
        <div className="input-field col s4">
          <select onChange={this.handleSort}>
            <option>Name</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
    )
  }
});

export default FilterControls;
