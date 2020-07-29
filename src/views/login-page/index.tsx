import React, { useState } from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
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
import { isEmail, required, validPassword, passwordConfirmed } from 'utils/validations';
import firebase from 'firebase-config';

interface Values {
    name: string;
    email: string;
    password: string;
    confirm: string;
}

interface IMessage {
    success?: boolean;
    message?: string;
}

const LoginPage: React.SFC<any> = ({ history }: any) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [message, setMessage] = useState<IMessage | null>(null);
    const [signIn, setSignIn] = useState(true);
    const classes = useStyles();

    const handleSubmit = async (values: any, signIn: boolean) => {
        try {
            if (signIn) {
                await firebase.login(values.email, values.password);
                history.push('/chat');
            } else {
                await firebase.register(values.name, values.email, values.password);
                setMessage({
                    success: true,
                    message: 'Please check your email to avtivate your account.',
                });
            }
        } catch (error) {
            setMessage({ success: false, message: error.message });
        }
    };

    React.useEffect(() => {}, []);

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
                {message && (
                    <Alert severity={message?.success ? 'success' : 'error'}>
                        {message?.message}
                    </Alert>
                )}
                <Formik
                    validateOnBlur
                    initialValues={{ name: '', email: '', password: '', confirm: '' }}
                    onSubmit={(values: Values, { setSubmitting }) => {
                        handleSubmit({ email: values.email, password: values.password }, signIn);
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
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {(isSubmitted && values.email !== '' && required(values.email)) ||
                            (isSubmitted && isEmail(values.email)) ? (
                                <Alert severity="error">
                                    {required(values.email) || isEmail(values.email)}
                                </Alert>
                            ) : null}
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

                            {(isSubmitted && touched.password && required(values.password)) ||
                            (isSubmitted && validPassword(values.password)) ? (
                                <Alert severity="error">
                                    {required(values.password) ||
                                        Object.values(
                                            validPassword(values.password),
                                        ).map((val: any) => (
                                            <Typography
                                                component="p"
                                                key={val}
                                            >{`- ${val}`}</Typography>
                                        ))}
                                </Alert>
                            ) : null}
                            {!signIn && (
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
                                    {(isSubmitted && touched.confirm && required(values.confirm)) ||
                                    (isSubmitted &&
                                        passwordConfirmed(values.password, values.confirm)) ? (
                                        <Alert severity="error">
                                            {required(values.confirm) ||
                                                passwordConfirmed(values.password, values.confirm)}
                                        </Alert>
                                    ) : null}
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
