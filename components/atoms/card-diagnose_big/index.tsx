import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {
  DiagnoseSymptomAdd,
  DiagnoseSymptomCard,
  StyledRow,
} from '../../../styles/form-container';

import {contentText, StyledText20} from '../../../styles/form-text';
import DropdownComponent from '../dropdown-diagnose';

// @ts-ignore
function CardDiagnoseBig({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);

  return (
    <DiagnoseSymptomCard
      style={{
        backgroundColor: isDarkMode ? '#041325' : '#FFFFFF',
      }}>
      <StyledRow>
        <DropdownComponent />
      </StyledRow>
      <StyledRow>
        <DropdownComponent />
        <DropdownComponent />
      </StyledRow>
      <StyledRow>
        <DropdownComponent />
        <DropdownComponent />
      </StyledRow>
      <DiagnoseSymptomAdd>
        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: 'contain',
            marginRight: 5,
          }}
          source={
            isDarkMode
              ? require('../../../assets/icons/add-icon_dark.png')
              : require('../../../assets/icons/add-icon.png')
          }
          alt={'Dark Mode'}
        />
        <StyledText20 style={contentStyle.medium}>Add Symptom</StyledText20>
      </DiagnoseSymptomAdd>
    </DiagnoseSymptomCard>
  );
}

export default CardDiagnoseBig;
