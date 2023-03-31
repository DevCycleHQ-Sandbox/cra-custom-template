import React from 'react';
import './App.css';
import {
  withDVCProvider,
  useVariableValue,
} from '@devcycle/devcycle-react-sdk';

function App() {
  const shouldWink = useVariableValue('should-wink', false);
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`logo512${shouldWink ? '_wink' : ''}.png`}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://docs.devcycle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn DevCycle
        </a>
      </header>
    </div>
  );
}

export default withDVCProvider({
  sdkKey: process.env.REACT_APP_DEVCYCLE_CLIENT_SDK_TOKEN as string,
})(App);
