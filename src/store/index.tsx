import React, { ReactChild } from 'react';

const initialState: any = {
    user: null,
    message: null,
};

interface IAction {
    type: string;
    payload: any;
}

export const Store = React.createContext<any>(initialState);

const rootReducer = (state: any, action: IAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

// const reduceReducers = (...reducers: Array<any>) => (state: any, action: any) =>
//     reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);

// const rootReducer = reduceReducers(userReducer, messageReducer);

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
