import TYPES from '../action-types';
import IAction from 'interfaces/action-interface';
import IUser from 'interfaces/user-interface';
import firebase from 'firebase-config';
import IChat from 'interfaces/chat-interface';

const setChatUser = async (
    currentUser: IUser,
    chatUser: IUser,
    dispatch: (args: IAction) => IAction,
) =>
    dispatch({
        type: TYPES.SET_CHAT_USER,
        payload: await firebase.setCurrentChatUser(currentUser, chatUser),
    });

const resetChatMessages = (dispatch: (args: IAction) => IAction): void => {
    dispatch({
        type: TYPES.RESET_CHAT_MESSAGES,
        payload: null,
    });
};

const getInitialChatUser = async (currentUser: IUser, dispatch: (args: IAction) => IAction) =>
    dispatch({
        type: TYPES.SET_CHAT_USER,
        payload: currentUser.uid && (await firebase.getCurrentChatUser(currentUser.uid)),
    });

const getCurrentChat = async (
    currentUserId: string,
    chatUserId: string,
    dispatch: (args: IAction) => IAction,
) => {
    firebase.getCurrentChat(currentUserId, chatUserId, dispatch);
};

const sendMessage = async (chat: IChat): Promise<void> => {
    firebase.addNewMessageToChat(chat);
};

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

export default {
    setChatUser,
    resetChatMessages,
    getCurrentChat,
    sendMessage,
    getInitialChatUser,
    deleteMessage,
};
