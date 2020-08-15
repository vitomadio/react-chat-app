import TYPES from '../action-types';
import IAction from 'interfaces/action-interface';

const ChatUserReducer = (state, action: IAction) => {
    switch (action.type) {
        case TYPES.SET_USERS_WITH_CHATS:
            return {
                ...state,
                usersWithChats: [
                    action.payload,
                    ...state.usersWithChats.filter((user) => user.uid !== action.payload.uid),
                ],
            };
        case TYPES.ON_CURRENT_CHAT_USER:
            return {
                ...state,
                usersWithChats: state.usersWithChats.filter((user) => user.uid !== action.payload),
            };
        case TYPES.GET_CHAT_MESSAGES:
            return { ...state, messages: [...state.messages, action.payload] };
        case TYPES.GET_USER_CHATS:
            return { ...state, userChats: [...state.userChats, action.payload] };
        case TYPES.SET_CHAT_AS_READ:
            return {
                ...state,
                messages: [state.messages.map((message) => ({ ...message, read: true }))],
            };
        case TYPES.RESET_CHAT_MESSAGES:
            return { ...state, messages: [] };
        case TYPES.ON_DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter((message) => message.chatId !== action.payload),
            };
        case TYPES.ON_DELETE_CHAT:
            return {
                ...state,
                messages: state.usersWithChats.uid === action.payload ? [] : state.messages,
            };
        default:
            return state;
    }
};

export default ChatUserReducer;
