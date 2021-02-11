import { makeStyles } from '@material-ui/core';
import React from 'react';
import SignIn from '../../components/SignIn';


const useStyles = makeStyles(() => ({
    root: {
      width: '100%'
    }
  }));

const SignInComponent = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <SignIn />
    </div>
  )
}

export default SignInComponent;
