import React from 'react-native';

import {
  contentText,
  StyledText16,
  StyledText20,
} from '../../../styles/form-text';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
function CardDiagnoseResult({isDarkMode, result, additional, showResult}) {
  const contentStyle = contentText(isDarkMode);

  let string;
  if (additional === 0) {
    string = 'Brief';
  } else {
    string = '';
  }

  return (
    <>
      <StyledText16 style={contentStyle.bold}>Result:</StyledText16>
      <DiagnoseResultCard
        style={{backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF'}}>
        {showResult && (
          <StyledText20 style={contentStyle.bold}>
            {string + ' ' + result}
          </StyledText20>
        )}
      </DiagnoseResultCard>
    </>
  );
}

export default CardDiagnoseResult;
