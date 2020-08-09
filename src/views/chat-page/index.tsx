import React, { useState, useEffect, useContext } from 'react';
import {
    CssBaseline,
    TextField,
    Container,
    Grid,
    Paper,
    FormControl,
    Button,
} from '@material-ui/core';
import { Formik, Field } from 'formik';
import TopBar from './components/top-bar';
import Drawer from './components/drawer';
import { isRequired } from 'utils/validations';
import { ChatUserActions } from 'store/chat-user-state';
import { Store } from 'store';
import ButtonList from './components/button-list';
import useStyles from './styles';
import { UsersActions } from 'store/users-state';
import ModalWrapper from 'components/modal-wrapper';
import IChat from 'interfaces/chat-interface';
import IUser from 'interfaces/user-interface';
import firebase from 'firebase-config';

interface IValues {
    text: string;
}

const ChatPage: React.FC = () => {
    const { state, dispatch } = useContext(Store);
    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(true);
    const [messageWriter, setMessageWriter] = useState<string | undefined>();
    const [messageSelected, setMessageSelected] = useState<IChat | undefined>();

    const handleDrawer = () => {
        setOpen(!open);
    };

    const sendMessage = (values) => {
        ChatUserActions.sendMessage({
            senderId: state.currentUser.uid,
            receiverId: state.chatUser.uid,
            text: values.text,
            read: false,
        });
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const handleDeleteMessage = () => {
        if (messageSelected && messageWriter) {
            ChatUserActions.deleteMessage(messageSelected, messageWriter, dispatch);
        }
        setModalOpen(false);
    };

    useEffect(() => {
        if (!state.currentUser) {
            UsersActions.getCurrentUser(dispatch);
        }
    }, []);

    useEffect(() => {
        if (state.currentUser) {
            ChatUserActions.getInitialChatUser(state.currentUser, dispatch);
            UsersActions.getChatUsers(state.currentUser?.uid, dispatch);
        }
    }, [state.currentUser && state.currentUser.uid]);

    useEffect(() => {
        if (state.chatUser?.uid) {
            ChatUserActions.getCurrentChat(state.currentUser.uid, state.chatUser.uid, dispatch);
        }
    }, [state.chatUser && state.chatUser.uid]);

    console.log(state);

    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <TopBar handleDrawerOpen={handleDrawer} open={open} />
                <Drawer handleDrawerClose={handleDrawer} open={open} />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container} disableGutters>
                        <Grid item xs={12} className={classes.chatContainer}>
                            {state.messages.map((message) =>
                                message.receiverId === state.currentUser.uid ? (
                                    <Grid
                                        className={classes.messageGrid}
                                        container
                                        key={message.chatId}
                                        onClick={() => {
                                            setModalOpen(true);
                                            setMessageSelected(message);
                                            setMessageWriter('receiver');
                                        }}
                                    >
                                        <Paper className={classes.receivedMessagePaper}>
                                            {message.text}
                                        </Paper>
                                    </Grid>
                                ) : (
                                    <Grid
                                        className={classes.messageGrid}
                                        container
                                        justify="flex-end"
                                        key={message.chatId}
                                        onClick={() => {
                                            setModalOpen(true);
                                            setMessageSelected(message);
                                            setMessageWriter('sender');
                                        }}
                                    >
                                        <Paper className={classes.sentMessagePaper}>
                                            {message.text}
                                        </Paper>
                                    </Grid>
                                ),
                            )}
                        </Grid>
                        <Grid item xs={12} className={classes.chatInput}>
                            <Formik
                                validateOnBlur
                                initialValues={{ text: '' }}
                                onSubmit={(values: IValues, { resetForm }) => {
                                    sendMessage(values);
                                    resetForm({});
                                }}
                            >
                                {({
                                    handleSubmit,
                                    handleChange,
                                    values,
                                    handleBlur,
                                    resetForm,
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <FormControl fullWidth className={classes.formControl}>
                                            <Field
                                                touched
                                                validate={isRequired}
                                                name="text"
                                                render={() => (
                                                    <TextField
                                                        value={values.text || ''}
                                                        name="text"
                                                        id="outlined-basic"
                                                        label="Write your message"
                                                        variant="outlined"
                                                        multiline
                                                        rowsMax={2}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        className={classes.inputField}
                                                        onKeyDown={(e: any) => {
                                                            if (e.key === 'Enter') {
                                                                sendMessage(values);
                                                                resetForm({});
                                                            }
                                                        }}
                                                    />
                                                )}
                                            />
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="secondary"
                                                className={classes.submit}
                                                disabled={values.text === ''}
                                            >
                                                Send
                                            </Button>
                                        </FormControl>
                                    </form>
                                )}
                            </Formik>
                        </Grid>
                    </Container>
                </main>
            </div>
            <ModalWrapper
                openModal={modalOpen}
                handleClose={handleClose}
                children={<ButtonList handleDelete={handleDeleteMessage} />}
            />
        </>
    );
};

export default ChatPage;
