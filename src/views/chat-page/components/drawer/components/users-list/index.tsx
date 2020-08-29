import React, { useContext, EventHandler, useState, useEffect } from 'react';
import { ListItem, Avatar, Box, ListItemText, Badge, IconButton } from '@material-ui/core';
import { ChatUserActions } from 'store/chat-user-state';
import DeleteIcon from '@material-ui/icons/Delete';
import IUser from 'interfaces/user-interface';
import { Store } from 'store';
import useStyles from './styles';
import clsx from 'clsx';

interface IUserItemProps {
    user: IUser;
    currentUser: IUser;
    activeChat?: boolean;
    index?: number;
    open: boolean;
}
const UserItem: React.FC<IUserItemProps> = ({
    user,
    currentUser,
    activeChat,
    index,
    open,
}: IUserItemProps): JSX.Element => {
    const classes = useStyles();
    const { state, dispatch } = useContext(Store);
    const [newMessages, setNewMessages] = useState<number | undefined>();

    useEffect(() => {
        if (user) {
            const chatUserMessages = state.userChats.filter((chat) => chat.user === user.uid);
            const newMsgs = chatUserMessages.filter((msg) => msg.read === false).length;
            setNewMessages(newMsgs);
        }
    }, [state.userChats, currentUser.uid, user]);

    const handleOnSelectUser: EventHandler<React.SyntheticEvent<Event | any>> = (e): void => {
        e.stopPropagation();
        if (
            state.usersWithChats.length > 0 &&
            !state.chatUsers.some((user) => user === state.usersWithChats[0].uid)
        ) {
            ChatUserActions.removeFromUsersWithChats(
                currentUser.uid,
                state.usersWithChats[0].uid,
                dispatch,
            );
        }
        ChatUserActions.resetChatMessages(dispatch);
        ChatUserActions.setChatAsRead(currentUser.uid, user.uid);
        const timer = setTimeout(() => {
            ChatUserActions.getCurrentChat(currentUser.uid, user.uid, dispatch);
            ChatUserActions.setChatUser(currentUser, user);
            clearTimeout(timer);
        }, 200);
    };

    const handleOnDeleteChat: EventHandler<React.SyntheticEvent<Event | any>> = (e): void => {
        e.stopPropagation();
        ChatUserActions.deleteChat(currentUser, user, dispatch);
        ChatUserActions.resetChatMessages(dispatch);
    };

    return (
        <ListItem
            key={user.uid}
            button
            onClick={handleOnSelectUser}
            className={clsx(index === 0 ? classes.active : '', !open ? classes.closed : '')}
        >
            <Box mr={2}>
                {user?.photoURL ? (
                    <IconButton color="inherit">
                        <Badge badgeContent={newMessages} color="secondary">
                            <Avatar
                                alt={user?.displayName || user?.email || undefined}
                                src={user?.photoURL || undefined}
                                className={classes.small}
                            />
                        </Badge>
                    </IconButton>
                ) : (
                    <IconButton color="inherit">
                        <Badge badgeContent={newMessages} color="secondary">
                            <Avatar className={clsx(classes.orange, classes.small)}>
                                {user?.displayName?.slice(0, 2)}
                            </Avatar>
                        </Badge>
                    </IconButton>
                )}
            </Box>
            {open && (
                <>
                    <ListItemText primary={user.displayName || user.email} />
                    {activeChat && <DeleteIcon onClick={handleOnDeleteChat} />}
                </>
            )}
        </ListItem>
    );
};

export default UserItem;
