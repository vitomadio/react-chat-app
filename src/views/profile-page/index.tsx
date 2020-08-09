import React, { useState, useEffect, ChangeEvent } from 'react';
import clsx from 'clsx';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import IUser from 'interfaces/user-interface';
import {
    Paper,
    Typography,
    Button,
    Grid,
    CssBaseline,
    AppBar,
    Toolbar,
    Avatar,
    TextField,
} from '@material-ui/core';
import { ExitToApp, Edit as EditIcon } from '@material-ui/icons';
import firebase from 'firebase-config';
import AlertMessage from 'components/alert-message';
import useStyles from './styles';

interface IProfileProps extends RouteComponentProps<any> {}

const ProfilePage: React.FC<IProfileProps> = (props: IProfileProps) => {
    const classes = useStyles();
    const [name, setName] = useState<string | undefined>();
    const [message, setMessage] = useState<any>();
    const [file, setFile] = useState<File | undefined>();
    const [imagePreview, setImagePreview] = useState<string | undefined>();
    const [user, setUser] = useState<IUser | null | undefined>(firebase.getCurrentUser());

    const handleSubmit = async () => {
        const response = await firebase.updateUserProfile(file, name);
        if (response?.status === 'success') {
            setUser(firebase.getCurrentUser());
        }
        setMessage(response);
        const timer = setTimeout(() => {
            setMessage(null);
            clearTimeout(timer);
        }, 3000);
    };

    const uploadFile = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        if (e.target.files) {
            const url = URL.createObjectURL(e.target.files[0]);
            setFile(e.target.files[0]);
            setImagePreview(url);
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />

            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h5" color="inherit" noWrap className={classes.title}>
                        Profile
                    </Typography>
                    <Button startIcon={<ExitToApp />} onClick={() => props.history.goBack()}>
                        Go Back
                    </Button>
                </Toolbar>
            </AppBar>

            <main className={classes.layout}>
                {message && <AlertMessage status={message.status} text={message.text} />}
                <Paper className={classes.paper}>
                    <Grid container alignItems="center" direction="column" spacing={2}>
                        <Grid item>
                            {user && (
                                <div className={classes.avatarWrapper}>
                                    <input
                                        id="raised-button-file"
                                        type="file"
                                        accept="image/.jpg,.png,.jpeg"
                                        className={classes.fileInput}
                                        onChange={uploadFile}
                                    />
                                    <label htmlFor="raised-button-file">
                                        <EditIcon
                                            color="primary"
                                            fontSize="large"
                                            className={classes.editIcon}
                                        />
                                    </label>
                                    {imagePreview || user.photoURL ? (
                                        <Avatar
                                            alt={user?.displayName || user?.email || undefined}
                                            src={imagePreview || user.photoURL || undefined}
                                            className={classes.large}
                                        />
                                    ) : (
                                        <Avatar className={clsx(classes.orange, classes.large)}>
                                            {user?.displayName?.slice(0, 2)}
                                        </Avatar>
                                    )}
                                </div>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                defaultValue={user?.displayName}
                                fullWidth
                                margin="normal"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                defaultValue={user?.email}
                                fullWidth
                                margin="normal"
                                disabled
                            />
                            <Grid
                                container
                                justify="flex-end"
                                spacing={2}
                                alignItems="center"
                                className={classes.btnsWrapper}
                            >
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSubmit();
                                        }}
                                        disabled={
                                            (name == null || name === '') && imagePreview == null
                                        }
                                    >
                                        Update
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => props.history.goBack()}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </main>
        </React.Fragment>
    );
};

export default withRouter(ProfilePage);
