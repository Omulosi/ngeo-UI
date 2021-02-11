import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';



const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const Profile = ({ className, user, ...rest }) => {
  const classes = useStyles();

  const userDetails = {
    avatar: '',
    city: '',
    country: '',
    name: (user && `${user.first_name} ${user.last_name}`) || '',
    timezone: 'GTM+3',
    role: user && user.role === 8? "Field Outreach Officer": '',
    jurisdiction: ''
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {userDetails.name}
          </Typography>

          <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${userDetails.role}`}
        </Typography>

          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${userDetails.jurisdiction}`}
          </Typography>

          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format('hh:mm A')} ${userDetails.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
