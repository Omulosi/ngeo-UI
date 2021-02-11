import React, { Fragment } from "react";
import { Marker } from "react-leaflet";
import { greenIcon } from "../utils/Icons";
import CustomPopup from "../popup/CustomPopup";

const ProjectLayer = (props) => {
  const { features=[] } = props;

  const iconMarkers = features.map((ft, index) => (
    <Marker
      key={index}
      position={ft.geometry.coordinates}
      icon={greenIcon}
    >
      <CustomPopup property={ft}/>
    </Marker>
  ));

  debugger

  return <Fragment>{iconMarkers}</Fragment>;
};

export default ProjectLayer;

