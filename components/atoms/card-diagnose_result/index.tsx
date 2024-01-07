import React from 'react-native';

import {
  contentText,
  StyledText16,
  StyledText20,
} from '../../../styles/form-text';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
function CardDiagnoseResult({isDarkMode, result, showResult}) {
  const contentStyle = contentText(isDarkMode);

  return (
    <>
      <StyledText16 style={contentStyle.bold}>Result:</StyledText16>
      <DiagnoseResultCard
        style={{backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF'}}>
        {showResult && (
          <StyledText20 style={contentStyle.bold}>{result}</StyledText20>
        )}
      </DiagnoseResultCard>
    </>
  );
}

export default CardDiagnoseResult;
