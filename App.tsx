import React, {useState} from 'react';

import {StyledSafeView} from './styles/input-container';

import UserAuth from './components/organism/1_user-auth';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <StyledSafeView>
      <UserAuth isDarkMode={isDarkMode} />
    </StyledSafeView>
  );
}

export default App;
