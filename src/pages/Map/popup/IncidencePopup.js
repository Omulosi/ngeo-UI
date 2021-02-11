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

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {

  }


  return (
    <Popup className="custom-popup">
      <div className={classes.content}>
      <Tabs>
        
          <TabPanel>
            <form onSubmit={handleSubmit}>
              <div>
                <div className={classes.inputWrapper}>
                  <label></label>
                  <input type="text" placeholder="Name" className={classes.input} />
                </div>
                <div className={classes.inputWrapper}>
                  <label></label>
                    <input
                      type="text"
                      placeholder="Value"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      className={classes.input}
                    />
                </div>
              </div>
              <div>
                <div className={classes.inputWrapper}>
                  <label></label>
                  <input type="text" placeholder="Name" className={classes.input} />
                </div>
                <div className={classes.inputWrapper}>
                  <label></label>
                    <input
                      type="text"
                      placeholder="Value"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      className={classes.input}
                    />
                </div>
              </div>
              <Button type="submit" variant="outlined" size="small" color="primary" className={classes.btn}>Save</Button>
            </form>
          </TabPanel>

          <TabPanel className={classes.panel}>

          <table className="metadata">
            <tbody>
                <tr>
                  <td>Latitude</td>
                  <td>{coords.latitude}</td>
                </tr>
                <tr>
                  <td>Longitude</td>
                  <td>{coords.longitude}</td>
                </tr>

                {
              
                  <tr>
                    <td>{}</td>
                    <td>{}</td>
                  </tr>

                }
              
            </tbody>
          </table>
          
          </TabPanel>
          <Divider />
          <TabList className={classes.tablist}>
            <Tab>Add Property</Tab>
            <Tab>Show Properties</Tab>
          </TabList>
      </Tabs>
      </div>
    </Popup>
  );
};

export default CustomPopup;
