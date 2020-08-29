import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './views/login-page';
import ChatPage from './views/chat-page';
import ProfilePage from './views/profile-page';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { PaletteOptions, Palette } from '@material-ui/core/styles/createPalette';
import firebase from 'firebase-config';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        palette: Palette;
    }
    interface ThemeOptions {
        palette?: PaletteOptions;
    }
}

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const App: React.FunctionComponent = (): JSX.Element => {
    const [firebaseInitialized, setFirebaseInitialized] = useState(false);

    useEffect(() => {
        firebase.isInitialized().then((res: any) => {
            setFirebaseInitialized(res);
        });
    }, []);
    return firebaseInitialized !== false ? (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/chat" component={ChatPage} />
                <Route path="/profile" component={ProfilePage} />
            </Switch>
        </ThemeProvider>
    ) : (
        <CircularProgress />
    );
};

export default App;
