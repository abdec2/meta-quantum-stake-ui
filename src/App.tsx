import { useEffect, useState } from 'react';
import './App.css';
import CONFIG from './abi/config';

import Header from './components/Header';
import Main from './components/Main';
import FooterComponent from './components/FooterComponent';

function App() {

  useEffect(() => {

  }, [])





  return (
      <div className="App bg-grad min-h-screen text-white">
        <Header />
        <Main />
        <FooterComponent />
      </div>
  );
}

export default App;
