import { makeStyles } from '@material-ui/core';
import React from 'react';
import Home from '../../components/Home';


const useStyles = makeStyles(() => ({
    root: {
      width: '100%'
    }
  }));

const LandingPage = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Home />
    </div>
  )
}

export default LandingPage;
