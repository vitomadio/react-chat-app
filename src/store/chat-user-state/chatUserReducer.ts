import TYPES from '../action-types';
import IAction from 'interfaces/action-interface';

const ChatUserReducer = (state, action: IAction) => {
    switch (action.type) {
        case TYPES.SET_CHAT_USER:
            return { ...state, chatUser: action.payload };
        case TYPES.SET_INITIAL_CHAT_USER:
            return { ...state, chatUser: action.payload };
        default:
            return state;
    }
};

export default ChatUserReducer;
