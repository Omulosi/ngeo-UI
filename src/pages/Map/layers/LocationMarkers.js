import React, { Fragment } from "react";
import { Marker } from "react-leaflet";
import CustomPopup from "../popup/CustomPopup";

const LocationMarkers = (props) => {
  const { markers, icon } = props;
  let features = [];
  if (markers.features) {
    features = markers.features;
  }

  const iconMarkers = features.map((property, index) => (
    <Marker
      key={index}
      position={property.geometry.coordinates}
      icon={icon}
    >
      <CustomPopup property={property}/>
    </Marker>
  ));

  return <Fragment>{iconMarkers}</Fragment>;
};

export default LocationMarkers;
