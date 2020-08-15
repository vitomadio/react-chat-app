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
}
const UserItem: React.FC<IUserItemProps> = ({
    user,
    currentUser,
    activeChat,
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
    }, [state.userChats.length, currentUser.uid]);

    const handleOnSelectUser: EventHandler<React.SyntheticEvent<Event | any>> = (e): void => {
        e.stopPropagation();
        ChatUserActions.resetChatMessages(dispatch);
        const timer = setTimeout(() => {
            ChatUserActions.getCurrentChat(currentUser.uid, user.uid, dispatch);
            ChatUserActions.setChatUser(currentUser, user);
            ChatUserActions.setChatAsRead(currentUser.uid, user.uid);
            clearTimeout(timer);
        }, 200);
    };

    const handleOnDeleteChat: EventHandler<React.SyntheticEvent<Event | any>> = (e): void => {
        e.stopPropagation();
        ChatUserActions.deleteChat(currentUser, user, dispatch);
    };

    return (
        <ListItem key={user.uid} button onClick={handleOnSelectUser}>
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
            <ListItemText primary={user.displayName || user.email} />
            {activeChat && <DeleteIcon onClick={handleOnDeleteChat} />}
        </ListItem>
    );
};

export default UserItem;
