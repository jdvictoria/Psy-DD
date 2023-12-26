import React from 'react';

import {DiagnoseSymptomCard, StyledRow} from '../../../styles/form-container';

import DropdownComponent from '../dropdown-diagnose';

// @ts-ignore
function CardDiagnoseBig({isDarkMode}) {
  return (
    <DiagnoseSymptomCard
      style={{
        backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF',
      }}>
      <StyledRow>
        <DropdownComponent isDarkMode={isDarkMode} label={'Symptom/s'} />
      </StyledRow>
      <StyledRow>
        <DropdownComponent isDarkMode={isDarkMode} label={'Duration'} />
        <DropdownComponent isDarkMode={isDarkMode} label={'Severity'} />
      </StyledRow>
      <StyledRow>
        <DropdownComponent isDarkMode={isDarkMode} label={'Drug Influenced?'} />
        <DropdownComponent isDarkMode={isDarkMode} label={'Causes Distress?'} />
      </StyledRow>
    </DiagnoseSymptomCard>
  );
}

export default CardDiagnoseBig;
