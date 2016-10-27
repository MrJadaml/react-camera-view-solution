import Camera from './Camera';
import React from 'react';

const Cameras = React.createClass({
  render() {
    const cameraList = this.props.cameras.map((camera, index) => {
      return <Camera
        camera={camera}
        key={index}
        handleAddToCart={this.props.handleAddToCart}
      />
    });

    return (
      <div>{ cameraList }</div>
    )
  }
});

export default Cameras;
