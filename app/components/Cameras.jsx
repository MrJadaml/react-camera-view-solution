import Camera from './Camera';
import React from 'react';

const Cameras = React.createClass({
  render() {
    const cameraList = this.props.cameras.map((camera) => {
      return <Camera camera={camera} />
    });

    return (
      <div>{ cameraList }</div>
    )
  }
});

export default Cameras;
