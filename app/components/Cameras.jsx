import Camera from './Camera';
import React from 'react';

const Cameras = React.createClass({
  render() {
    const TEMPARRAY = [1,2,3];
    const cameraList = TEMPARRAY.map((camera) => {
      return <Camera />
    });

    return (
      <div>{ cameraList }</div>
    )
  }
});

export default Cameras;
