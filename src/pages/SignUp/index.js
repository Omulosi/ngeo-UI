import { makeStyles } from '@material-ui/core';
import React from 'react';
import SignUp from '../../components/SignUp';


const useStyles = makeStyles(() => ({
    root: {
      width: '100%'
    }
  }));

const SignUpComponent = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <SignUp />
    </div>
  )
}

export default SignUpComponent;
