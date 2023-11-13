import React, {useState} from 'react';

import {StyledSafeView} from './styles/input-container';

import HomeNavigation from './components/organism/2_home';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <StyledSafeView>
      <HomeNavigation isDarkMode={isDarkMode} />
    </StyledSafeView>
  );
}

export default App;
