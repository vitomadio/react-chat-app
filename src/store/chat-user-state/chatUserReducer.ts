import TYPES from '../action-types';
import IAction from 'interfaces/action-interface';

const ChatUserReducer = (state, action: IAction) => {
    switch (action.type) {
        case TYPES.SET_CHAT_USER:
            return { ...state, chatUser: action.payload };
        case TYPES.GET_CHAT_MESSAGES:
            return { ...state, messages: [...state.messages, action.payload] };
        case TYPES.RESET_CHAT_MESSAGES:
            return { ...state, messages: [] };
        case TYPES.ON_DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter((message) => message.chatId !== action.payload),
            };
        default:
            return state;
    }
};

export default ChatUserReducer;
