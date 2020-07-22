import * as React from 'react';
import { Formik } from 'formik';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import { Store } from '../../store/store';
import { UserActions } from '../../store/user-state';
import {
  isEmail, required, validPassword, passwordConfirmed
} from '../../utils/validations';

interface ILoginPageProps {
}

interface Values {
  email: string;
  password: string;
  confirm: string;
}

const handleSubmit = async (dispatch: Function, values: any, signIn: boolean) => {
  if (signIn) {
    const res = await UserActions.signInUser(dispatch, values);
  }
  return UserActions.signUpUser(dispatch, values);
};

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const { state, dispatch } = React.useContext(Store);
  const [signIn, setSignIn] = React.useState(true);
  const classes = useStyles();

  console.log(state);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {signIn ? 'Sign in' : 'Sign Up'}
        </Typography>
        {state.message
          && (
            <Alert severity={state.message.success ? 'success' : 'error'}>
              {state.message.message}
            </Alert>
          )
        }
        <Formik
          validateOnBlur
          initialValues={{ email: '', password: '', confirm: '' }}
          onSubmit={(values: Values, { resetForm, setSubmitting }) => {
            handleSubmit(dispatch, { email: values.email, password: values.password }, signIn);
            resetForm({ values: { email: '', password: '', confirm: '' } });
            setSubmitting(false);
          }}
        >
          {({
            values,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {values.email !== '' && required(values.email) || isEmail(values.email)
                  ? (
                    <Alert severity="error">
                      {required(values.email) || isEmail(values.email)}
                    </Alert>
                  ) : null
                }
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  id="password"
                  autoComplete="current-password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />

                {touched.password && required(values.password) || validPassword(values.password)
                  ? (
                    <Alert severity="error">
                      {required(values.password) ||
                        Object.values(validPassword(values.password)).map((val: any) => (
                          <Typography component="p" key={val}>{`- ${val}`}</Typography>
                        ))}
                    </Alert>
                  ) : null
                }
                {!signIn
                  && (
                    <>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="confirm"
                        label="Confirm password"
                        id="confirm"
                        autoComplete="current-confirm"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirm}
                      />
                      {touched.confirm && required(values.confirm)
                        || passwordConfirmed(values.password, values.confirm)
                        ? (
                          <Alert severity="error">
                            {required(values.confirm)
                              || passwordConfirmed(values.password, values.confirm)}
                          </Alert>
                        ) : null
                      }
                    </>
                  )}
                {signIn
                  && (
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                  )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={isSubmitting}
                >
                  {signIn ? 'Sign In' : 'Sign Up'}
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
              </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2" onClick={() => setSignIn(!signIn)}>
                      {signIn ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In'}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            )}
        </Formik>
      </div>
    </Container>
  );
};

export default LoginPage;
