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
import { axiosWithAuth } from "../../utils/axios";

import { AGENTS_LIST_ENDPOINT } from "../../config/urls";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Agents = () => {
  const intl = useIntl();
  const classes = useStyles();

  const { data } = useDemoData({
    dataSet: 'Agents',
    rowLength: 10,
    maxColumns: 10,
  });

  const [agents, setAgents] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get(AGENTS_LIST_ENDPOINT)
    .then(({ data }) => {
      let res = data.data.length > 0? data.data: [];
      setAgents(res);
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  let agentRows = [];

  if (agents && agents.length > 0) {
    agentRows = agents.map(agent => {
      return {id: agent.id, ...agent.attributes}
    })
  }

  let agentColumns = [];

  if (agentRows.length > 0) {
    let colFields = Object.keys(agentRows[0]);
    for (let elem of colFields) {
      let header = "";
      switch (elem) {
        case "first_name":
          header = "First Name";
          break;
        case "last_name":
            header = "Last Name";
            break;
        case "rating":
              header = "Rating";
              break;
        case "id_number":
          header = "ID Number";
          break;
        case "phone_number":
          header = "Phone Number";
          break;
        default:
          header = elem;
      }

      agentColumns.push({field: elem, headerName: header })
    }
  }

  let agentData = { columns: agentColumns, rows: agentRows };

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: 'agents',
        defaultMessage: 'Agents',
      })}
    >
      <div  className={classes.root}>
        <Container maxWidth={false}>
        <DataGridToolbar title="Add Agent" />
          <Box mt={3}>
            <ResultGrid data={agentData} />
          </Box>
        </Container>
      </div>
    </Page>
  )
}

export default Agents;
