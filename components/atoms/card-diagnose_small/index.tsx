import React from 'react';
import {Image} from 'react-native';

import {
  DiagnoseResultCard,
  DiagnoseResultCenter,
  DiagnoseResultLeft,
  DiagnoseResultRight,
} from '../../../styles/form-container';

import {contentText, StyledText20} from '../../../styles/form-text';

// @ts-ignore
function CardDiagnoseSmall({
  isDarkMode,
  clearBigCard,
  addBigCard,
  handleDiagnose,
  disabled,
}) {
  const contentStyle = contentText(isDarkMode);

  return (
    <DiagnoseResultCard
      style={{
        backgroundColor: isDarkMode ? '#041325' : '#FFFFFF',
      }}>
      <DiagnoseResultLeft
        onPress={clearBigCard}
        style={{
          backgroundColor: '#FE7762',
        }}>
        <StyledText20 style={contentStyle.semibold}>Clear</StyledText20>
      </DiagnoseResultLeft>
      <DiagnoseResultCenter
        onPress={addBigCard}
        style={{backgroundColor: '#45A4FF'}}>
        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: 'contain',
          }}
          source={
            isDarkMode
              ? require('../../../assets/icons/add-icon_dark.png')
              : require('../../../assets/icons/add-icon.png')
          }
          alt={'Dark Mode'}
        />
      </DiagnoseResultCenter>
      <DiagnoseResultRight
        style={{
          backgroundColor: '#00A911',
        }}
        onPress={handleDiagnose}
        disabled={disabled}>
        <StyledText20 style={contentStyle.semibold}>Diagnose</StyledText20>
      </DiagnoseResultRight>
    </DiagnoseResultCard>
  );
}

export default CardDiagnoseSmall;
