import TYPES from '../action-types';
import IAction from 'interfaces/action-interface';
import firebase from 'firebase-config';

const getAllUsers = async (dispatch: (args: IAction) => IAction) =>
    dispatch({
        type: TYPES.GET_ALL_USERS,
        payload: await firebase.getUsers(),
    });

export default { getAllUsers };
