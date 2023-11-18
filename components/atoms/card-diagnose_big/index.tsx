import React from 'react';
import {Image} from 'react-native';

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
        <DropdownComponent isDarkMode={isDarkMode} label={'Symptom'} />
      </StyledRow>
      <StyledRow>
        <DropdownComponent isDarkMode={isDarkMode} label={'Duration'} />
        <DropdownComponent isDarkMode={isDarkMode} label={'Severity'} />
      </StyledRow>
      <StyledRow>
        <DropdownComponent isDarkMode={isDarkMode} label={'Drug Influenced?'} />
        <DropdownComponent isDarkMode={isDarkMode} label={'Causes Distress?'} />
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
