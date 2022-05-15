import { useEffect, useState } from 'react';
import './App.css';
import { DAppProvider, Rinkeby, useEthers } from '@usedapp/core'

import Header from './components/Header';
import Main from './components/Main';
import FooterComponent from './components/FooterComponent';

function App() {
  const [activateError, setActivateError] = useState<String> ('')
  const { error } = useEthers()

  useEffect(() => {
    console.log(error)
    if (error) {
      setActivateError(error.message)
    }
  }, [error])





  return (
    <DAppProvider config={{
      networks: [Rinkeby]
    }}>
      {activateError}
      <div className="App bg-grad min-h-screen text-white">
        <Header />
        <Main />
        <FooterComponent />
      </div>
    </DAppProvider>
  );
}

export default App;
