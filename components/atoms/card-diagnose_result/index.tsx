import React from 'react-native';

import {
  contentText,
  StyledText16,
  StyledText20,
} from '../../../styles/form-text';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
function CardDiagnoseResult({
  isDarkMode,
  result,
  duration,
  specification,
  showResult,
}) {
  const contentStyle = contentText(isDarkMode);

  let string;
  let code;

  if (duration === 0) {
    string = 'Brief';
  } else {
    string = '';
  }

  if (specification >= 2 && specification <= 8) {
    code = '(F44.4)';
  }

  return (
    <>
      <StyledText16 style={contentStyle.bold}>Result:</StyledText16>
      <DiagnoseResultCard
        style={{backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF'}}>
        {showResult && (
          <StyledText20 style={contentStyle.bold}>
            {string + ' ' + result + ' ' + code}
          </StyledText20>
        )}
      </DiagnoseResultCard>
    </>
  );
}

export default CardDiagnoseResult;
