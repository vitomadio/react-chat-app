import TYPES from '../action-types';
import IAction from 'interfaces/action-interface';
import firebase from 'firebase-config';

const getAllUsers = async (dispatch: (args: IAction) => IAction) =>
    dispatch({
        type: TYPES.GET_ALL_USERS,
        payload: await firebase.getUsers(),
    });

const getCurrentUser = async (dispatch: (args: IAction) => IAction): Promise<any> =>
    dispatch({
        type: TYPES.GET_CURRENT_USER,
        payload: await firebase.getCurrentUser(),
    });

const getChatUsers = (currentUserId: string, dispatch: (args: IAction) => IAction): void =>
    firebase.getChatUsers(currentUserId, dispatch);

export default { getAllUsers, getCurrentUser, getChatUsers };
