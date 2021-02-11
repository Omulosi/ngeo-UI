import React from "react";
import { GeoJSON } from "react-leaflet";

const LocationLayer = (props) => {
  const {
    data
  } = props;


  return (
    <GeoJSON data={data} />
  );
};

export default LocationLayer;
