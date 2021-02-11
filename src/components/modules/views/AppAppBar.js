import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../../AppBar';
import Toolbar, { styles as toolbarStyles } from '../../Toolbar';

const styles = (theme) => ({
  navbar: {
    width: '100%',
    zIndex: '3',
    top: '0',
    left: '0'

  },
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    padding: "6px 12px"
  },
  linkSecondary: {
    color: "#1A73E8",
  },
  btnFill: {
    backgroundColor: "#1A73E8",
    border: "0 none",
    borderRadius: "2px",
  }
});

const AppAppBar = (props) => {
  const { classes, backgroundColor } = props;

  return (
    <div>
      <AppBar position="fixed" className={classes.navbar} style={{backgroundColor: backgroundColor,}}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              href="/"
            >
              {'Ngeo'}
            </Link>
          </div>
          <div className={classes.right}>
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}
                href="/signin"
              >
                {'Sign In'}
              </Link>
              <Link
                variant="h6"
                underline="none"
                className={clsx(classes.rightLink, classes.btnFill)}
                href="/signup"
              >
                {'Sign Up'}
              </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);