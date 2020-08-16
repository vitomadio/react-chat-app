import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    ExitToApp as ExitIcon,
    Person as PersonIcon,
    ChevronLeft as ChevronLeftIcon,
} from '@material-ui/icons';
import firebase from 'firebase-config';
import { Store } from 'store';

import useStyles from './styles';
import { ChatUserActions } from 'store/chat-user-state';

export interface ITopBarProps extends RouteComponentProps<any> {
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void;
    open: boolean;
}

const TopBar: React.FC<ITopBarProps> = (props: ITopBarProps) => {
    const classes = useStyles();
    const { state, dispatch } = React.useContext(Store);
    const [newMessages, setNewMessages] = useState<number>(0);

    useEffect(() => {
        if (state.userChats.length > 0) {
            const newMsgs = state.userChats.filter((chat) => !chat.read).length;
            setNewMessages(newMsgs);
        }
    }, [JSON.stringify(state.userChats), state.currentUser?.uid]);

    const handleLogOut = async () => {
        await firebase.logout();
        props.history.replace('/');
    };

    const handleGoToProfile = () => {
        ChatUserActions.resetChatMessages(dispatch);
        props.history.push('/profile');
    };

    return (
        <AppBar
            position="absolute"
            className={clsx(classes.appBar, props.open && classes.appBarShift)}
        >
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <IconButton onClick={props.handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
                <Typography component="span" variant="h5" color="inherit" className={classes.title}>
                    {state.usersWithChats[0]?.displayName || state.usersWithChats[0]?.email}
                </Typography>

                <div className={classes.iconsWrapper}>
                    <Typography component="span">{`Hello ${
                        state.currentUser?.displayName || state.currentUser?.email
                    }!`}</Typography>
                    <IconButton color="inherit" onClick={handleGoToProfile}>
                        <PersonIcon fontSize="large" />
                    </IconButton>
                    {newMessages > 0 && (
                        <IconButton color="inherit">
                            <Badge badgeContent={newMessages} color="secondary">
                                <NotificationsIcon fontSize="large" />
                            </Badge>
                        </IconButton>
                    )}
                    <IconButton
                        color="inherit"
                        onClick={(e) => {
                            e.preventDefault();
                            handleLogOut();
                        }}
                    >
                        <ExitIcon fontSize="large" />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default withRouter(TopBar);
