// import React, { useState, useEffect, useCallback } from "react";
// import { Map, LayersControl, LayerGroup} from "react-leaflet";
// import L from "leaflet";
// // import { axiosWithAuth } from "../utils/axiosAuth";
// import {
//   OSMTileLayer,
//   CountyLayer,
//   LocationMarkers,
//   EditControlComponent,
//   AreaLayer
// } from "./layers";
// import MapSearch from "./MapSearch";
// import DistanceMeasure from "./utils/DistanceMeasure";
// import { render } from "react-dom";

// // work around broken icons when using webpack, see https://github.com/PaulLeCam/react-leaflet/issues/255
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl:
//     "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// var _ = require("lodash");

// class  MapContainer extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             position: []
//         }
//     }

//   let { area, markers, counties } = props;


//   const center = [-1.308889970195843, 36.86084746801358];

//   const [layerData, setLayerData] = useState({});

//   const onChange = (data) => {
//     console.log("GeoJson data => " + data.features);
   
//   };

//   const handleOnContextMenu = useCallback(
//     (event) => {
//       setPosition([event.latlng.lat, event.latlng.lng]);
//     },
//     [setPosition]
//   );

//   render() {

//     const { markers, counties, area } = this.state;

//     return (
//         <Map
//           className="map"
//           ref="map"
//           center={center}
//           zoom={8}
//           minZoom={7}
//           maxZoom={15}
//           oncontextmenu={handleOnContextMenu}
//           boundsOptions={{padding: [50, 50]}}
//         >
//           <MapSearch />
    
//           <LayersControl position="topright">
//             <LayersControl.BaseLayer checked name="OpenStreetMap">
//               <OSMTileLayer />,
//             </LayersControl.BaseLayer>
    
//             <LayersControl.Overlay checked name="Jurisdiction">
//               <AreaLayer data={area} />,
//             </LayersControl.Overlay>
    
//             <LayersControl.Overlay name="Location Markers" checked>
//               <LayerGroup>
//                 {markers ? <LocationMarkers markers={markers} /> : null}
//               </LayerGroup>
//             </LayersControl.Overlay>
    
//             <LayersControl.Overlay name="Counties - Kenya">
//               <CountyLayer data={counties} />,
//             </LayersControl.Overlay>
    
//           </LayersControl>
    
//           <EditControlComponent
//             onChange={onChange}
//             data={layerData}
//             setLayerData={setLayerData}
//           />
    
//           <DistanceMeasure />
//         </Map>
//       );
//   }

// };

// export default MapContainer;
