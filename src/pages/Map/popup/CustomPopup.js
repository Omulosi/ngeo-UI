import React from "react";
import { Popup } from "react-leaflet";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Button, Divider } from "@material-ui/core";
import { useFormik } from "formik";

import './styles.css';

const useStyles = makeStyles({
  content: {
    minWidth: "200px",
  },
  table: {
    width: "100px",
  },
  input: {
    border: "none",
    margin: "0",
    width: "100%",
    padding: "5px",
    textAlign: "left",
    color: "black",
    background: "transparent"
  },
  inputWrapper: {
    border: "1px solid #ccc",
    background: "#f7f7f7",
    width: "50%",
    display: "inline-block",
  },
  btn: {
    marginTop: "5%",
    borderRadius: "0",
  },
  tablist: {
    marginTop: "2%",
    width: "100%",
    marginBottom: "5%",
    borderBottom: "1px solid #ccc",
  },
  panel: {
    paddingBottom: "4%"
  },
});

const CustomPopup = (props) => {

  const { property } = props;

  let info = property? property.properties: {};
  let coords = {};

  if (property) {
    coords = {...coords, latitude: property.geometry.coordinates[0], longitude: property.geometry.coordinates[1]}
  }

  info = {...info, ...coords};

  let elems = [];

  for (let k in info) {
    if (k !== 'objectid' && k !== 'foo' && k !== 'altitude') {
      elems.push(<tr><td className="property-key">{k}</td><td>{info[k]}</td></tr>)
    }
    
  }

  const classes = useStyles();

  return (
    <Popup className="custom-popup">
      <div className={classes.content}>
            <table className="metadata">
              <tbody className="property-table">
                  {elems}
              </tbody>
            </table>
            <Divider />
      </div>
    </Popup>
  );
};

export default CustomPopup;
