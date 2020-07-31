import React, { useState, useCallback } from 'react';
import { Formik, FormikHelpers, Field } from 'formik';
import { withRouter, RouteComponentProps } from 'react-router-dom';
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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import { validateEmail, validatePassword, validateConfirm } from 'utils/validations';
import AlertMessage from 'components/alert-message';
import IMessage from 'interfaces/message-interface';
import firebase from 'firebase-config';

interface IValues {
    name: string;
    email: string;
    password: string;
    confirm: string;
}

interface ILoginProps extends RouteComponentProps<any> {}

const LoginPage: React.FC<ILoginProps> = (props: ILoginProps) => {
    const [message, setMessage] = useState<IMessage | undefined>();
    const [signIn, setSignIn] = useState(true);
    const classes = useStyles();

    const handleSubmit = useCallback(async (values: IValues, signIn: boolean) => {
        try {
            if (signIn) {
                await firebase.login(values.email, values.password);
                props.history.push('/chat');
            } else {
                await firebase.register(values.name, values.email, values.password);
                props.history.push('/chat');
                // setMessage({
                //     status: 'success',
                //     text: 'Please check your email to avtivate your account.',
                // });
            }
        } catch (error) {
            setMessage({ status: 'error', text: error.message });
        }
    }, []);

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
                {message && <AlertMessage status={message.status} text={message.text} />}
                <Formik
                    validateOnBlur
                    initialValues={{ name: '', email: '', password: '', confirm: '' }}
                    onSubmit={(values: IValues, { setSubmitting }: FormikHelpers<IValues>) => {
                        handleSubmit(values, signIn);
                        setSubmitting(false);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            {!signIn && (
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    name="name"
                                    label="Name"
                                    id="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            )}
                            <Field
                                name="email"
                                value={values.email}
                                validate={validateEmail}
                                render={() => (
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        type="email"
                                        autoComplete="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="email"
                                    />
                                )}
                            />

                            {errors.email && touched.email && (
                                <AlertMessage status="error" text={errors.email} />
                            )}
                            <Field
                                name="password"
                                value={values.password}
                                validate={validatePassword}
                                render={() => (
                                    <TextField
                                        id="password"
                                        name="password"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        autoComplete="current-password"
                                        type="password"
                                        label="Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                )}
                            />
                            {errors.password && touched.password && (
                                <AlertMessage status="error" text={errors.password} />
                            )}
                            {!signIn && (
                                <>
                                    <Field
                                        name="confirm"
                                        value={values.confirm}
                                        validate={(value) =>
                                            validateConfirm(values.password, value)
                                        }
                                        render={() => (
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="confirm"
                                                label="Confirm password"
                                                id="confirm"
                                                type="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        )}
                                    />
                                    {touched.confirm && errors.confirm && (
                                        <AlertMessage status="error" text={errors.confirm} />
                                    )}
                                </>
                            )}
                            {signIn && (
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
                                    <Link
                                        href="#"
                                        variant="body2"
                                        onClick={() => setSignIn(!signIn)}
                                    >
                                        {signIn
                                            ? "Don't have an account? Sign Up"
                                            : 'Already have an account? Sign In'}
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

export default withRouter(LoginPage);
