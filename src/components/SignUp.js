import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from './Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import { useHistory } from 'react-router-dom';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { signUp } from '../redux/actions/authActions';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    backgroundColor: "#1A73E8",
    border: "0 none",
    borderRadius: "2px",
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    background: '#424242',
    minHeight: 'calc(100vh - 65px)',
    alignItems: 'center'
  },
  textWhite: {
    color: theme.palette.common.white
  },
  formControl: {
    marginTop: theme.spacing(1),
    minWidth: 120,
    background: "#fff"
  },
  error: {
    color: "#f44336",
    textAlign: 'center'
  }
}));



function SignUp() {
  const classes = useStyles();

  const history = useHistory();

  const [role, setRole] = React.useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'CLEAR_ERRORS'});
  },[dispatch])

  const error = useSelector(state => state.auth.authError, shallowEqual);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const validate = (values) => {
    const errors = required(['first_name', 'last_name', 'email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    return errors;
  };


  const onSubmit = async values => {
    // send values to backend for validation
    dispatch(signUp({...values, role }, history))
  }

  return (
    <React.Fragment>
      <AppAppBar backgroundColor="#28282a" />
      <div className={classes.formContent}>
        <AppForm>
          <React.Fragment>
            <Typography variant="h3" gutterBottom marked="center" align="center" className={classes.textWhite}>
              Sign Up
            </Typography>
            <Typography variant="body2" align="center">
              <Link href="/premium-themes/onepirate/sign-in/" underline="always" className={classes.textWhite}>
                Already have an account?
              </Link>
            </Typography>
            <p className={classes.error}>{error && error}</p>
          </React.Fragment>
          <Form 
          onSubmit={onSubmit} 
          subscription={{ submitting: true }} 
          validate={validate}>
            {({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      autoFocus
                      component={RFTextField}
                      autoComplete="fname"
                      fullWidth
                      label="First name"
                      name="first_name"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="lname"
                      fullWidth
                      label="Last name"
                      name="last_name"
                      required
                    />
                  </Grid>
                </Grid>
                <Field
                  autoComplete="email"
                  component={RFTextField}
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  required
                />
                <Field
                  fullWidth
                  component={RFTextField}
                  required
                  name="password"
                  autoComplete="current-password"
                  label="Password"
                  type="password"
                  margin="normal"
                />
                <FormSpy subscription={{ submitError: true }}>
                  {({ submitError }) =>
                    submitError ? (
                      <FormFeedback className={classes.feedback} error>
                        {submitError}
                      </FormFeedback>
                    ) : null
                  }
                </FormSpy>

                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={role}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={2}>CEO</MenuItem>
                    <MenuItem value={3}>Audit</MenuItem>
                    <MenuItem value={4}>Finace</MenuItem>
                    <MenuItem value={5}>Regional Manager</MenuItem>
                    <MenuItem value={6}>County Manager</MenuItem>
                    <MenuItem value={7}>Field Outreach Officer</MenuItem>
                  </Select>
                </FormControl>



                <FormButton
                  className={classes.button}
                  color="secondary"
                  fullWidth
                >
                  Sign Up
                </FormButton>
                    
              </form>
            )}
          </Form>

         
        </AppForm>
      </div>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignUp);