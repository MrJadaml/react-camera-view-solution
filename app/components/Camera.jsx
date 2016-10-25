import React from 'react';

const Camera = React.createClass({
  render() {
    return (
      <div>
        <h3>camera.title</h3>
        <img src="http://www.fujirumors.com/wp-content/uploads/GR.jpg" />
        <p>camera.price</p>
        <p>camera.rating</p>
        <button>ADD TO CART</button>
      </div>
    )
  }
});

export default Camera;
