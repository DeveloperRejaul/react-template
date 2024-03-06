import React from 'react';
import Home from './features/home/Home';
import AppContext from './store/context/AppContext';

function App() {
  return (
    <AppContext>
      <Home />
    </AppContext>
  );
}

export default App;
