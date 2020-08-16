import TYPES from '../action-types';
import IAction from 'interfaces/action-interface';
import IUser from 'interfaces/user-interface';
import firebase from 'firebase-config';
import IChat from 'interfaces/chat-interface';

const setChatUser = async (currentUser: IUser, userWithChats: IUser) =>
    firebase.setCurrentChatUser(currentUser, userWithChats);

const setChatAsRead = async (currentUserId: string, chatUserId: string): Promise<void> => {
    firebase.setChatAsRead(currentUserId, chatUserId);
};

const resetChatMessages = (dispatch: (args: IAction) => IAction): void => {
    dispatch({
        type: TYPES.RESET_CHAT_MESSAGES,
        payload: null,
    });
};

const getInitialChatUser = async (currentUser: IUser, dispatch: (args: IAction) => IAction) =>
    firebase.getCurrentChatUser(currentUser.uid, dispatch);

const getCurrentChat = async (
    currentUserId: string,
    chatUserId: string,
    dispatch: (args: IAction) => IAction,
) => {
    firebase.getCurrentChat(currentUserId, chatUserId, dispatch);
};

const getUsersWithChats = async (
    currentUserId: string,
    dispatch: (args: IAction) => IAction,
): Promise<void> => {
    firebase.getUserChats(currentUserId, dispatch);
};

const sendMessage = async (chat: IChat): Promise<void> => {
    firebase.addNewMessageToChat(chat);
};

const removeFromUsersWithChats = async (
    currentUserId: string,
    chatUserId: string,
    dispatch: (args: IAction) => IAction,
): Promise<void> => firebase.removeFromUsersWithChats(currentUserId, chatUserId, dispatch);

const deleteMessage = async (
    chat: IChat,
    messageWriter: string,
    dispatch: (args: IAction) => IAction,
): Promise<void> => {
    dispatch({
        type: TYPES.ON_DELETE_MESSAGE,
        payload: await firebase.deleteMessage(chat, messageWriter),
    });
};

const deleteChat = async (
    currentUser: IUser,
    chatUser: IUser,
    dispatch: (args: IAction) => IAction,
): Promise<void> => firebase.deleteChat(currentUser, chatUser, dispatch);

export default {
    setChatUser,
    setChatAsRead,
    resetChatMessages,
    getCurrentChat,
    getUsersWithChats,
    sendMessage,
    getInitialChatUser,
    removeFromUsersWithChats,
    deleteMessage,
    deleteChat,
};
