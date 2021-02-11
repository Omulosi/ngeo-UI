import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { useEffect} from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from './Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { login } from '../redux/actions/authActions';


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
    color: "#fff"
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
  error: {
    color: "#f44336"
  }
}));


function SignIn() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({type: 'CLEAR_ERRORS'});
  },[dispatch])

  const error = useSelector(state => state.auth.authError, shallowEqual);

  const validate = (values) => {
    const errors = required(['email', 'password'], values);

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
    dispatch(login(values, history));
  }
  

  return (
    <>
      <AppAppBar backgroundColor="#28282a" />
      <div className={classes.formContent}>
        <AppForm>
          <React.Fragment>
            <Typography variant="h3" gutterBottom marked="center" align="center" className={classes.textWhite}>
              Sign In
            </Typography>
            <Typography variant="body2" align="center">
              {'Not a member yet? '}
              <Link href="/signup" align="center" underline="always" className={classes.textWhite}>
                Sign Up here
              </Link>
            </Typography>
          </React.Fragment>
          <Form 
            onSubmit={onSubmit} 
            validate={validate}>
            {({ handleSubmit, submitting, values }) => (
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <Field
                  autoComplete="email"
                  autoFocus
                  component={RFTextField}
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  required
                  size="large"
                />
                <Field
                  fullWidth
                  size="large"
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
                <FormButton
                  className={classes.button}
                  size="large"
                  fullWidth
                >
                  Sign In
                </FormButton>
              </form>
            )}
          </Form>
  
          <Typography align="center" className={classes.error}>
            {error && error[0]}
          </Typography>
          <Typography align="center">
            <Link underline="always" href="/forgot-password/" className={classes.textWhite}>
              Forgot password?
            </Link>
          </Typography>
        </AppForm>
      </div>
      <AppFooter />
    </>
  );
}

export default withRoot(SignIn);
