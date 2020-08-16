import React, { useState, useEffect, useContext } from 'react';
import { CssBaseline, Container, Grid, Paper } from '@material-ui/core';
import TopBar from './components/top-bar';
import Drawer from './components/drawer';
import InputField from './components/input-field';
import { ChatUserActions } from 'store/chat-user-state';
import { Store } from 'store';
import ButtonList from './components/button-list';
import useStyles from './styles';
import { UsersActions } from 'store/users-state';
import ModalWrapper from 'components/modal-wrapper';
import IChat from 'interfaces/chat-interface';

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
        if (state.currentUser?.uid) {
            ChatUserActions.getInitialChatUser(state.currentUser, dispatch);
            UsersActions.getChatUsers(state.currentUser?.uid, dispatch);
            ChatUserActions.getUsersWithChats(state.currentUser.uid, dispatch);
        }
    }, [state.currentUser?.uid]);

    useEffect(() => {
        if (state.usersWithChats.length > 0 && state.messages.length === 0) {
            ChatUserActions.getCurrentChat(
                state.currentUser.uid,
                state.usersWithChats[0].uid,
                dispatch,
            );
            ChatUserActions.setChatAsRead(state.currentUser.uid, state.usersWithChats[0].uid);
        }
    }, [state.usersWithChats[0]?.uid]);

    console.log(state);

    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <TopBar
                    handleDrawerOpen={handleDrawer}
                    handleDrawerClose={handleDrawer}
                    open={open}
                />
                <Drawer open={open} />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container} disableGutters>
                        <Grid item xs={12} className={classes.chatContainer}>
                            {state.usersWithChats?.length > 0 &&
                                state.messages
                                    .filter(
                                        (msg) =>
                                            msg.receiverId === state.usersWithChats[0].uid ||
                                            msg.senderId === state.usersWithChats[0].uid,
                                    )
                                    .map((message) =>
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
                            <InputField />
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
