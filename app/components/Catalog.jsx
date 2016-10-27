import Cameras from './Cameras';
import FilterControls from './FilterControls';
import React from 'react';

const Catalog = React.createClass({
  getInitialState() {
    return {
      ratingFilter: null,
      searchFilter: this.props.cameras
    }
  },

  handleSearch(searchText) {
    const search = searchText.toLowerCase().trim();
    const cameras = this.props.cameras;

    const searchFilter = cameras.filter((camera) => {
      for (const key in camera) {
        const valString = camera[key].toString().toLowerCase();

        if (valString.indexOf(search) !== -1) {
          return true;
        }
      }
      return false;
    });

    this.setState({ searchFilter });
  },

  render() {
    return (
      <div className="col s12 m8">
        <FilterControls
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
        />
        <Cameras
          cameras={this.state.searchFilter}
          handleAddToCart={this.props.handleAddToCart}
        />
      </div>
    )
  }
});

export default Catalog;
