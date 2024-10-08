import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import React from "react";
import pano from './60e3f60aec5d1f0008e1c908.jpeg'
// import panoramaImage from './path-to-your-panorama-image.jpg'; // Update with your panorama image path
const PanoramaViewer = () => {
  return (
    <div style={{ width: '60%', height: '400px', margin:'20px'}}>
      <ReactPhotoSphereViewer 
        src={pano}
        width="60%"
        height="400px"
      ></ReactPhotoSphereViewer>
    </div>
  );
};

export default PanoramaViewer;
