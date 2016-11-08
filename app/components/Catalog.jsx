import Cameras from './Cameras';
import FilterControls from './FilterControls';
import React from 'react';

const Catalog = React.createClass({
  getInitialState() {
    return {
      ratingFilter: null,
      searchFilter: this.props.cameras,
      sortType: 'name',
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

  handleSort(sortType) {
    let searchFilter = this.state.searchFilter.sort((a, b) => {
      if (a[sortType] < b[sortType]) {
        return 1;
      } else if ( a[sortType] > b[sortType]) {
        return -1;
      } else {
        return 0;
      }
    });

    if (sortType === 'title') {
      searchFilter = searchFilter.reverse();

      this.setState({ searchFilter });
    } else {
      this.setState({ searchFilter });
    }
  },

  render() {
    return (
      <div className="col s12 m8">
        <FilterControls
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
          sortType={this.sortType}
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
