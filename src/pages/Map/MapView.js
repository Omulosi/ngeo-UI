import React, { useState, useEffect, useCallback } from "react";
import { Map, LayersControl, LayerGroup} from "react-leaflet";
import { CoordinatesControl } from 'react-leaflet-coordinates'
import { greenIcon, blueIcon } from "./utils/Icons";
import L from "leaflet";
// import { axiosWithAuth } from "../utils/axiosAuth";
import {
  OSMTileLayer,
  CountyLayer,
  LocationMarkers,
  EditControlComponent,
  LocationLayer,
  RegionLayer
} from "./layers";
import MapSearch from "./MapSearch";
import DistanceMeasure from "./utils/DistanceMeasure";
import { green } from "@material-ui/core/colors";

// work around broken icons when using webpack, see https://github.com/PaulLeCam/react-leaflet/issues/255
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var _ = require("lodash");

const MapView = (props) => {
  let { area, projects, installations, markers } = props;

  const [position, setPosition] = useState([-1.2921, 36.8219]);

  const [layerData, setLayerData] = useState({});

  const onChange = (data) => {
    console.log("GeoJson data => " + data.features);
   
  };

  const handleOnContextMenu = useCallback(
    (event) => {
      setPosition([event.latlng.lat, event.latlng.lng]);
    },
    [setPosition]
  );

  const center = [0.69960492000038, 37.9210640870001];


  return (
    <Map
      className="map"
      center={center}
      zoom={11}
      minZoom={7}
      maxZoom={15}
      oncontextmenu={handleOnContextMenu}
      zoomControl={false}
    >
      <MapSearch />

      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <OSMTileLayer />,
        </LayersControl.BaseLayer>

        <LayersControl.Overlay checked name="Jurisdiction">
          <RegionLayer data={area} />
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Projects">
          <LayerGroup>
            {markers ? <LocationMarkers markers={markers} icon={greenIcon} /> : null}
          </LayerGroup>
        </LayersControl.Overlay>


        <LayersControl.Overlay name="Installations">
          <LayerGroup>
            {installations ? <LocationMarkers markers={installations} icon={blueIcon} /> : null}
          </LayerGroup>
        </LayersControl.Overlay>
  

      </LayersControl>

      <EditControlComponent
        onChange={onChange}
        data={layerData}
        setLayerData={setLayerData}
      />
      <DistanceMeasure />
     
    </Map>
  );
};

export default MapView;
