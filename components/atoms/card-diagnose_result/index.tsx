import React from 'react-native';

import {contentText, StyledText16, StyledText24} from '../../../styles/form-text';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
function CardDiagnoseResult({isDarkMode, result}) {
  const contentStyle = contentText(isDarkMode);

  return (
    <>
        <StyledText16 style={contentStyle.bold}>Result:</StyledText16>
        <DiagnoseResultCard
            style={{backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF'}}>
            <StyledText24 style={contentStyle.bold}>{result}</StyledText24>
        </DiagnoseResultCard>
    </>
  );
}

export default CardDiagnoseResult;
