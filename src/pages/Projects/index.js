import Page from 'material-ui-shell/lib/containers/Page/Page';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import ResultGrid from '../../components/ResultGrid';
import DataGridToolbar from '../../components/DataGridToolbar';
import { DataGrid } from '@material-ui/data-grid';

import { axiosWithAuth } from "../../utils/axios"


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Projects = () => {
  const intl = useIntl();
  const classes = useStyles();

  const [projects, setProjects] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get('http://127.0.0.1:8000/api/v1/isiolo_projects')
    .then(({ data }) => {
      data = data.data.results? data.data.results.features: []
      setProjects(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const pRows = projects? projects.map(p => {
    return {id: p.id, ...p.properties};
  }) : [];

  let pColumns = []
  if (pRows.length > 0) {
    let fields = Object.keys(pRows[0]);
    for (let elem of fields) {
      let header = "";

      switch(elem) {
        case "id":
          header = "ID";
          break;
        case "objectid":
          header = "Object ID";
          break;
        case "fname":
          header = "Name";
          break;
        case "latitude":
          header = "Latitude";
          break;
        case "longitude":
          header = "Longitude";
          break;
        case "altitude":
          header = "Altitude";
          break;
        case "couname":
          header = "County";
          break;
        case "scouname":
          header = "Sub-County";
          break;
        case "divname":
          header = "Divison";
          break;
        case "locname":
          header = "Location";
          break;
        case "slname":
          header = "Sub-Location";
          break;
        case "constname":
          header = "Constituecy";
          break;
        case "wardname":
          header = "Ward";
          break;
        case "villname":
          header = "Village";
          break;
        case "foo":
          header = "Meta";
          break;
        case "theme":
          header = "Theme";
          break;
        case "control":
          header = "Control";
          break;
        default:
          header = elem;
      }
        pColumns.push({field: elem, headerName: header})
    }

  }

  let projectData = {columns: pColumns, rows: pRows };

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: 'projects',
        defaultMessage: 'Projects',
      })}
    >
      <div  className={classes.root}>
        <Container maxWidth={false}>
        <DataGridToolbar title="Add Project" />
          <Box mt={3}>
            <ResultGrid data={projectData} />
          </Box>
        </Container>
      </div>
    </Page>
  )
}

export default Projects;
