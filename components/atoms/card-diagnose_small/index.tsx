import React from 'react-native';

import {
  DiagnoseResultCard,
  DiagnoseResultLeft,
  DiagnoseResultRight,
} from '../../../styles/form-container';

import {contentText, StyledText20} from '../../../styles/form-text';

// @ts-ignore
function CardDiagnoseSmall({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);

  return (
    <DiagnoseResultCard
      style={{
        backgroundColor: isDarkMode ? '#041325' : '#FFFFFF',
      }}>
      <DiagnoseResultLeft
        style={{
          backgroundColor: '#FE7762',
        }}>
        <StyledText20 style={contentStyle.semibold}>Clear</StyledText20>
      </DiagnoseResultLeft>
      <DiagnoseResultRight
        style={{
          backgroundColor: '#00A911',
        }}>
        <StyledText20 style={contentStyle.semibold}>Diagnose</StyledText20>
      </DiagnoseResultRight>
    </DiagnoseResultCard>
  );
}

export default CardDiagnoseSmall;
