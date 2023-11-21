import React, {useState} from 'react';

import {StyledSafeView} from './styles/input-container';

import HomeNavigation from './components/organism/2_home';
import UserAuth from './components/organism/1_user-auth';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    // <UserAuth isDarkMode={isDarkMode} />
    <HomeNavigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
  );
}

export default App;
