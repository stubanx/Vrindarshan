import React from 'react';
import ImageMapper from 'react-img-mapper';
import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
import mapimg from "./map.jpg";
import "./App.css";

const MyImageMap = () => {
  // Define the map areas
  const MAP = {
    name: "my-map",
    areas: [
      { name: "Area 1", shape: "circle", coords: [7010,7863,290], preFillColor: "rgba(255, 0, 0, 0.5)", href: "https://stubanx.com" },
      // { name: "Area 2", shape: "rect", coords: [150, 150, 200, 200], preFillColor: "rgba(0, 255, 0, 0.5)", href: "https://stubanx.com" }
      // Add more areas as needed
    ]
  };

  // Handle click event
  const handleMapClick = (area) => {
    console.log("Clicked area:", area);
    if (area.href) {
      window.open(area.href);
    }
  };

  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <div className="tools" style={{ margin: '20px', position: 'sticky', top: '20px' }}>
        <button onClick={() => zoomIn()}>++</button>
        <button onClick={() => zoomOut()}>--</button>
        <button onClick={() => resetTransform()}>XX</button>
      </div>
    );
  };

  return (
    <div style={{margin:'50px'}}>
      <h1>Interactive Map</h1>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={4}
        initialPositionX={100}
        initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <Controls />
            <TransformComponent>
              <ImageMapper
                src={mapimg} // Update with the path to your image
                map={MAP}
                onClick={handleMapClick}
                width={600} // Adjust the width as needed
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default MyImageMap;



// import React from 'react';
// import ImageMapper from 'react-img-mapper';
// // src/ZoomableImage.js
// import mapimg from "./map.jpg"
// // import React, {Component} from 'react';
// import "./App.css"
// import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
// // import MyImageMap from "./imageMap.js";
// // import { Component } from "react";

// const MyImageMap = () => {
//   // Define the map areas
//   const MAP = {
//     name: "my-map",
//     areas: [
//       { name: "Area 1", shape: "rect", coords: [8888,7435,29], preFillColor: "red", href: "https://stubanx.com" },
//       { name: "Area 2", shape: "rect", coords: [290, 172, 333, 250], preFillColor: "rgba(0, 255, 0, 0.5)", href: "https://stubanx.com" }
//       // Add more areas as needed
//     ]
//   };

//   // Handle click event
//   const handleMapClick = (area) => {
//     window.open(area.href, "_blank");
//   };

//   const Controls = () =>{
//     const { zoomIn, zoomOut, resetTransform} = useControls();
//     return (
//       <div className="tools" style={{ margin: '20px', position:'sticky', top: '20px'}}>
//                 <button onClick={() => zoomIn()}>++ </button>
//                 <button onClick={() => zoomOut()}>-- </button>
//                 <button onClick={() => resetTransform()}>XX </button>
//               </div>
//     );
//   };

//   return (
//     <div>
//       <h1>Interactive Map</h1>
//       <TransformWrapper
//     initialScale={1}
//     initialPositionX={100}
//         initialPositionY={100}
//       >
//         {({zoomIn, zoomOut, resetTransform, ...rest}) => (
//           <>
//                <Controls/>
//             <TransformComponent>
//       <ImageMapper
//         src={mapimg} // Update with the path to your image
//         map={MAP}
//         onClick={handleMapClick}
//         width={600} // Adjust the width as needed
//       />
//        </TransformComponent>
//           </>
//         )}
//       </TransformWrapper>
//     </div>
//   );
// };

// export default MyImageMap;



// const ImageMap = () => {
//   return (
//     <map name="image-map">
//       <area 
//         target="" 
//         alt="Shri Krishna Balaram Temple ISCKON" 
//         title="Shri Krishna Balaram Temple ISCKON" 
//         href="https://360darshan.com/of/krishna-balaram-mandir" 
//         coords="8888,7435,29" 
//         shape="circle" 
//         color='magenta'
//       />
//       <area 
//         target="" 
//         alt="Shri Radha Kund Goverdhan" 
//         title="Shri Radha Kund Goverdhan" 
//         href="https://360darshan.com/of/radha-kunda" 
//         coords="7010,7863,29" 
//         shape="circle" 
//       />
//       <area 
//         target="" 
//         alt="Radha Madan Mohan Temple" 
//         title="Radha Madan Mohan Temple" 
//         href="https://360darshan.com/of/madana-mohan" 
//         coords="8930,7214,28" 
//         shape="circle" 
//       />
//     </map>
//   );
// };

// export default ImageMap;
