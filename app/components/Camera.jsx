import React from 'react';

const Camera = React.createClass({
  handleClick() {
    console.log('Add to cart!');
  },

  render() {
    return (
      <div>
        <h3>camera.title</h3>
        <img src="http://www.fujirumors.com/wp-content/uploads/GR.jpg" />
        <h4>camera.price</h4>
        <h5>camera.rating</h5>
        <a className="waves-effect waves-light btn" onClick={this.handleClick}>ADD TO CART</a>
      </div>
    )
  }
});

export default Camera;
