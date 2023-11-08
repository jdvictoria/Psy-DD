import React, {useState} from 'react';

import {StyledSafeView} from './styles/container';

import SignIn from './components/organism/sign-in';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <StyledSafeView>
      <SignIn isDarkMode={isDarkMode} />
    </StyledSafeView>
  );
}

export default App;
