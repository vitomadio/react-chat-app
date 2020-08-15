import React, { ReactChild } from 'react';
import { ChatUserReducer } from './chat-user-state';
import { UsersReducer } from './users-state';
import IAction from 'interfaces/action-interface';

const initialState: any = {
    users: [],
    usersWithChats: [],
    currentUser: null,
    messages: [],
    chatUsers: [],
    userChats: [],
};

export const Store = React.createContext<any>(initialState);

// const rootReducer = (state: any, action: IAction) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// };

const reduceReducers = (...reducers: Array<any>) => (state: any, action: IAction) =>
    reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);

const rootReducer = reduceReducers(UsersReducer, ChatUserReducer);

type Props = {
    children: ReactChild | NameChildrenSlots;
};

type NameChildrenSlots = {
    header?: ReactChild;
    media?: ReactChild;
    content?: ReactChild;
    action?: ReactChild;
};

export function StoreProvider(props: Props): JSX.Element {
    const [state, dispatch] = React.useReducer(rootReducer, initialState);

    return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
}
