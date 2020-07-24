import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './views/login-page';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ChatPage from './views/chat-page';
import { PaletteOptions, Palette } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        palette: Palette;
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        palette?: PaletteOptions;
    }
}

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

console.log(theme);

const App: React.FunctionComponent = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/chat" component={ChatPage} />
            </Switch>
        </ThemeProvider>
    );
};

export default App;
