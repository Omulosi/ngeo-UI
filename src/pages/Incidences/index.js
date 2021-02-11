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

  const { data } = useDemoData({
    dataSet: 'Incidence',
    rowLength: 10,
    maxColumns: 10,
  });

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: 'incidences',
        defaultMessage: 'Incidences',
      })}
    >
      <div  className={classes.root}>
        <Container maxWidth={false}>
        <DataGridToolbar title="Add Incidence" />
          <Box mt={3}>
            <ResultGrid data={data} />
          </Box>
        </Container>
      </div>
    </Page>
  )
}

export default Projects;
