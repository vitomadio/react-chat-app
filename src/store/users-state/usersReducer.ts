import * as React from 'react';
import TYPES from '../action-types';
import IAction from 'interfaces/action-interface';

const UsersReducer = (state, action: IAction) => {
    switch (action.type) {
        case TYPES.GET_ALL_USERS:
            return { ...state, users: action.payload };
        case TYPES.GET_CURRENT_USER:
            return { ...state, currentUser: action.payload };
        case TYPES.GET_USERS_WITH_CHATS:
            return { ...state, chatUsers: [...state.chatUsers, action.payload] };
        default:
            return state;
    }
};

export default UsersReducer;
