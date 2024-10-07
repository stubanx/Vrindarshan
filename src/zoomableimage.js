// src/ZoomableImage.js
import map from "./map.jpg"
import React from 'react';
import "./App.css"
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ImageMap from "./imageMap.js"
const ZoomableImage = () => {
  return (
    <div style={{ width: '1192px', height: '80vh', overflow: 'auto', border: '1px solid black' }}>
      <TransformWrapper
        initialScale={0.1}
        initialPositionX={0}
        initialPositionY={0}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <div className="tools" /*style={{ marginBottom: '10px' }}*/>
              <button onClick={() => zoomIn()}>Zoom In</button>
              <button onClick={() => zoomOut()}>Zoom Out</button>
              <button onClick={() => resetTransform()}>Reset</button>
            </div>
            <TransformComponent>
              <img
                src={map}
                alt="Zoomable"
                // style={{ width: '720px', height: '80vh' }}
              />
              <ImageMap/>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
     </div>
  );
};

export default ZoomableImage;
