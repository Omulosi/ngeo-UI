import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { useIntl } from 'react-intl';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../components/TabPanel';


import Page from 'material-ui-shell/lib/containers/Page/Page';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import Password from './Password';

import { axiosWithAuth } from 'utils/axios';



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(5)
  },
  tab: {
    color: 'rgb(33, 150, 243)'
  }
}));

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MyAccount = (props) => {
  const classes = useStyles();
  const intl = useIntl();

  const {
    profileData
  } = props;

  const [user, setUser] = useState({});

  useEffect(() => {
    axiosWithAuth()
    .get('/auth/me')
    .then(({data}) => {
      setUser(data.data.attributes);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Page
      pageTitle={intl.formatMessage({
        id: 'my_account',
        defaultMessage: 'My Account',
      })}
      className={classes.root}
    >

    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
          variant="fullWidth"
          textColor="secondary"
          >
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="security" {...a11yProps(1)} />
          </Tabs>
        </Grid>

        <TabPanel value={value} index={0}>
          <Grid
            container
            spacing={3}>
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <Profile user={user}/>
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <ProfileDetails user={user}/>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid
            container
            spacing={3}>
            <Grid item lg={12} md={12} xs={12}>
            <Password />
            </Grid>
          </Grid>
        </TabPanel>


      </Container>
    
    </div>
   
    </Page>
  );
};

export default MyAccount;
