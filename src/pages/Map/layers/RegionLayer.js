import React from "react";
import { GeoJSON } from "react-leaflet";

const RegionLayer = (props) => {
  const {
    data
  } = props;

   /**
   * Defines path options for styling GeoJSON lines.
   * Called internally when data is added.
   * 
   * options:
   *  - color
   *  - fillColor (== color)
   * 
   * @param feature feature to display
   */
  const regionStyles = (feature) => {
    return {color: 'rgb(238, 153, 0)', fillColor: "rgb(238, 153, 0)", opacity: '0.4'};
  }

  return (
    <GeoJSON data={data} style={regionStyles}/>
  );
};

export default RegionLayer;
