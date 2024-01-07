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
  } else if (duration === 2) {
    string = '(Single Episode)';
  } else if (duration === 3) {
    string = '(Recurrent Episode)';
  } else {
    string = '';
  }

  if (specification >= 2 && specification <= 8) {
    code = '(F44.4)';
  } else if (specification === 9) {
    code = '(F44.5)';
  } else if (specification >= 10 && specification <= 13) {
    code = '(F44.6)';
  } else if (specification === 14) {
    code = '(F44.7)';
  } else if (specification === 15) {
    code = '(Mild)';
  } else if (specification === 16) {
    code = '(Moderate)';
  } else if (specification === 17) {
    code = '(Severe)';
  } else if (specification === 18) {
    code = '(Extreme)';
  } else if (specification === 19) {
    code = 'by Self';
  } else if (specification === 20) {
    code = 'by Proxy';
  } else {
    code = '';
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
