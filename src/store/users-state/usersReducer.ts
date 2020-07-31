import * as React from 'react';
import TYPES from '../action-types';
import IAction from 'interfaces/action-interface';

const UsersReducer = (state, action: IAction) => {
    switch (action.type) {
        case TYPES.GET_ALL_USERS:
            return { ...state, users: action.payload };
        default:
            return state;
    }
};

export default UsersReducer;
