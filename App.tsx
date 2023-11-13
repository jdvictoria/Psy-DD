import React, {useState} from 'react';

import {StyledSafeView} from './styles/input-container';

import UserAuth from './components/organism/1_user-auth';
import HomeProfile from './components/organism/2_home/a_profile';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <StyledSafeView>
      <UserAuth isDarkMode={isDarkMode} />
      <HomeProfile isDarkMode={isDarkMode} />
    </StyledSafeView>
  );
}

export default App;
