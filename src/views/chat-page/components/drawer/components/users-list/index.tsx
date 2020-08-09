import * as React from 'react';
import { ListItem, Avatar, Box, ListItemText } from '@material-ui/core';
import { ChatUserActions } from 'store/chat-user-state';
import IUser from 'interfaces/user-interface';
import { Store } from 'store';

import useStyles from './styles';
import clsx from 'clsx';

interface IUsersListProps {
    user: IUser;
    currentUser: IUser;
}
const UsersList: React.FC<IUsersListProps> = ({
    user,
    currentUser,
}: IUsersListProps): JSX.Element => {
    const classes = useStyles();
    const { state, dispatch } = React.useContext(Store);

    return (
        <ListItem
            key={user.uid}
            button
            onClick={() => {
                ChatUserActions.resetChatMessages(dispatch);
                const timer = setTimeout(() => {
                    ChatUserActions.setChatUser(currentUser, user, dispatch);
                    clearTimeout(timer);
                }, 300);
            }}
        >
            <Box mr={2}>
                {user?.photoURL ? (
                    <Avatar
                        alt={user?.displayName || user?.email || undefined}
                        src={user?.photoURL || undefined}
                        className={classes.small}
                    />
                ) : (
                    <Avatar className={clsx(classes.orange, classes.small)}>
                        {user?.displayName?.slice(0, 2)}
                    </Avatar>
                )}
            </Box>
            <ListItemText primary={user.displayName || user.email} />
        </ListItem>
    );
};

export default UsersList;
