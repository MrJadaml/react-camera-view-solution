import React from 'react';

const Camera = React.createClass({
  render() {
    return (
      <div>
        <h3>{this.props.camera.title}</h3>
        <img src={this.props.camera.image} />
        <h4>Price: ${this.props.camera.price}</h4>
        <h5>Rating: {this.props.camera.rating}</h5>
        <a className="waves-effect waves-light btn">ADD TO CART</a>
      </div>
    )
  }
});

export default Camera;
