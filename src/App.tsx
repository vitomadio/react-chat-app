import React from 'react';
import firebase from './firebase';

export interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props: IAppProps) => {
  return (
    <div>
      Hello World
    </div>
  );
};

export default App;
