import React, {useState} from 'react';
import {StyledSafeView} from './styles/container';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return <StyledSafeView />;
}

export default App;
