import TYPES from '../action-types';
import IAction from 'interfaces/action-interface';
import IUser from 'interfaces/user-interface';
import firebase from 'firebase-config';

const setChatUser = async (
    currentUser: IUser,
    chatUser: IUser,
    dispatch: (args: IAction) => IAction,
) =>
    dispatch({
        type: TYPES.SET_CHAT_USER,
        payload: await firebase.setCurrentChatUser(currentUser, chatUser),
    });

const getInitialChatUser = async (currentUser: IUser, dispatch: (args: IAction) => IAction) =>
    dispatch({
        type: TYPES.SET_INITIAL_CHAT_USER,
        payload: currentUser.uid && (await firebase.getCurrentChatUser(currentUser.uid)),
    });

export default { setChatUser, getInitialChatUser };
