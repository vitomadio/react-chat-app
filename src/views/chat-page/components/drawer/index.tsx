import React, { useEffect, useState, useMemo } from 'react';
import clsx from 'clsx';
import { Drawer, Divider, IconButton, InputBase, List } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import UserItem from './components/users-list';
import { UsersActions } from 'store/users-state';
import { Store } from 'store';

import useStyles from './styles';

interface IDrawerProps {
    open: boolean;
}

export default function App({ open }: IDrawerProps) {
    const classes = useStyles();
    const { state, dispatch } = React.useContext(Store);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        UsersActions.getAllUsers(dispatch);
    }, []);

    const handleChangeSearch = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ): void => {
        const searchWord = e.target.value.toLowerCase();
        setSearch(searchWord);
    };

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
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
                    onChange={handleChangeSearch}
                />
            </div>
            <Divider />
            {state.users && state.currentUser && (
                <>
                    {state.usersWithChats.length > 0 && (
                        <>
                            <List
                                component="nav"
                                aria-label="secondary mailbox folders"
                                className={classes.usersList}
                            >
                                {state.usersWithChats
                                    .filter((user) =>
                                        user.displayName.toLowerCase().includes(search),
                                    )
                                    .map((user, idx) => (
                                        <UserItem
                                            key={user.uid}
                                            user={user}
                                            currentUser={state.currentUser}
                                            activeChat
                                            index={idx}
                                            open={open}
                                        />
                                    ))}
                            </List>
                            <Divider />
                        </>
                    )}
                    <List
                        component="nav"
                        aria-label="secondary mailbox folders"
                        className={classes.usersList}
                    >
                        {state.users
                            .filter(
                                (user) =>
                                    user.uid !== state.currentUser.uid &&
                                    !state.usersWithChats.some((u) => u.uid === user.uid),
                            )
                            .map((user) => (
                                <UserItem
                                    key={user.uid}
                                    user={user}
                                    currentUser={state.currentUser}
                                    open={open}
                                />
                            ))}
                    </List>
                </>
            )}
        </Drawer>
    );
}
