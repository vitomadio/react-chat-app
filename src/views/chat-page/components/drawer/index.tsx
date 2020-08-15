import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
    Drawer,
    Divider,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemText,
    Avatar,
    Box,
} from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon, Search as SearchIcon } from '@material-ui/icons';
import UserItem from './components/users-list';
import firebase from 'firebase-config';
import IUser from 'interfaces/user-interface';
import { UsersActions } from 'store/users-state';
import { Store } from 'store';

import useStyles from './styles';

interface IDrawerProps {
    handleDrawerClose: () => void;
    open: boolean;
}

export default function App(props: IDrawerProps) {
    const classes = useStyles();
    const { state, dispatch } = React.useContext(Store);
    const [currentUser, setCurrentUser] = useState<IUser | null>(firebase.getCurrentUser());

    useEffect(() => {
        UsersActions.getAllUsers(dispatch);
    }, []);
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
            }}
            open={props.open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={props.handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <Divider />
            {state.users && currentUser && state.usersWithChats && (
                <>
                    <List component="nav" aria-label="secondary mailbox folders">
                        {state.usersWithChats.map((user) => (
                            <UserItem
                                key={user.uid}
                                user={user}
                                currentUser={currentUser}
                                activeChat
                            />
                        ))}
                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folders">
                        {state.users
                            .filter(
                                (user) =>
                                    user.uid !== currentUser.uid &&
                                    !state.usersWithChats.some((u) => u.uid === user.uid),
                            )
                            .map((user) => (
                                <UserItem key={user.uid} user={user} currentUser={currentUser} />
                            ))}
                    </List>
                </>
            )}
        </Drawer>
    );
}
