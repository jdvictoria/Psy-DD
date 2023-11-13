import React, {useState} from 'react';

import {StyledSafeView} from './styles/container';

import UserAuth from './components/organism/a_user-auth';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <StyledSafeView>
      <UserAuth isDarkMode={isDarkMode} />
    </StyledSafeView>
  );
}

export default App;
