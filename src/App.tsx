import React from 'react';
import { FriendProvider } from './context/friend/friendState';
import Home from './pages/Home';

const App = () => {
  return (
    <FriendProvider>
      <Home />
    </FriendProvider>
  );
};

export default App;
