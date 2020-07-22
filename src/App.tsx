import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './views/login-page';

export interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props: IAppProps): JSX.Element => {
  return (
    <Switch>
      <Route path="/" component={LoginPage} />
    </Switch>
  );
};

export default App;
