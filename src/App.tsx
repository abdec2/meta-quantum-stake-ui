import React from 'react';
import './App.css';
import { DAppProvider, Rinkeby } from '@usedapp/core'
import Header from './components/Header';

function App() {

  return (
    <DAppProvider config={{
      networks: [Rinkeby]
    }}>
      <div className="App bg-blue-900 min-h-screen text-white">
        <Header />
      </div>
    </DAppProvider>
  );
}

export default App;
