import TYPES from '../action-types';

export interface IAction {
    type: string;
    payload: any;
}

function userReducer(state: any, action: IAction) {
    switch (action.type) {
        case TYPES.USER_SIGN_IN_SUCCESS:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}

export default userReducer;
