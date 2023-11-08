import React, {useState} from 'react';

import {textStyle, SampleText} from './styles/text';
import {StyledSafeView} from './styles/container';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <StyledSafeView>
      {}
      <SampleText style={textStyle.black}>Hello</SampleText>
      <SampleText style={textStyle.bold}>Hello</SampleText>
      <SampleText style={textStyle.thin}>Hello</SampleText>
    </StyledSafeView>
  );
}

export default App;
