import React, {useState} from 'react';

import {StyledSafeView} from './styles/input-container';

import HomeNavigation from './components/organism/2_home';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return <HomeNavigation isDarkMode={isDarkMode} />;
}

export default App;
