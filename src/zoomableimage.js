// src/ZoomableImage.js
import mapimg from "./map.jpg"
import React, {Component} from 'react';
import "./App.css"
import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
import MyImageMap from "./imageMap.js";
// import { Component } from "react";

const Controls = () =>{
  const { zoomIn, zoomOut, resetTransform} = useControls();
  return (
    <div className="tools" style={{ margin: '20px', position:'sticky', top: '20px'}}>
              <button onClick={() => zoomIn()}>++ </button>
              <button onClick={() => zoomOut()}>-- </button>
              <button onClick={() => resetTransform()}>XX </button>
            </div>
  );
};
const ZoomableImage = () => {
  return (
    <TransformWrapper
    initialScale={1}
    initialPositionX={100}
        initialPositionY={100}
      >
        {({zoomIn, zoomOut, resetTransform, ...rest}) => (
          <>
               <Controls/>
            <TransformComponent>
              {/* <canvas> */}

               {/* <div style={{ width: '1192px', height: '80vh', overflow: 'auto', border: '1px solid black' }}> */}
              <img
                src={mapimg}
                alt="Zoomable"
                style={{ width: '720px', height: '80vh' }}
                />
                <MyImageMap/>
                {/* </canvas> */}
        {/* </div> */}
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
  );
};

export default ZoomableImage;


