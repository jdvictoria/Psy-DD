import React from 'react';

import {DiagnoseSymptomCard, StyledRow} from '../../../styles/form-container';

import DropdownComponent from '../dropdown-diagnose';

import {traumaSymptoms} from '../../../utils/trauma';

const dummyData = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
];

// @ts-ignore
function CardDiagnoseBig({isDarkMode, filter}) {
  let symptomData;
  let durationData;
  let severityData;
  let drugData;
  let distressData;

  if (filter === 'a') {
      symptomData = traumaSymptoms;
      durationData = dummyData;
      severityData = dummyData;
      drugData = dummyData;
      distressData = dummyData;
  } else {
      symptomData = dummyData;
      durationData = dummyData;
      severityData = dummyData;
      drugData = dummyData;
      distressData = dummyData;
  }

  return (
    <DiagnoseSymptomCard
      style={{
        backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF',
      }}>
      <StyledRow>
        <DropdownComponent isDarkMode={isDarkMode} data={symptomData} label={'Symptom/s'} value={null} setValue={null} />
      </StyledRow>
      <StyledRow>
        <DropdownComponent isDarkMode={isDarkMode} data={durationData} label={'Duration'} value={null} setValue={null} />
        <DropdownComponent isDarkMode={isDarkMode} data={severityData} label={'Severity'} value={null} setValue={null} />
      </StyledRow>
      <StyledRow>
        <DropdownComponent isDarkMode={isDarkMode} data={drugData} label={'Drug Influenced?'} value={null} setValue={null} />
        <DropdownComponent isDarkMode={isDarkMode} data={distressData} label={'Causes Distress?'} value={null} setValue={null} />
      </StyledRow>
    </DiagnoseSymptomCard>
  );
}

export default CardDiagnoseBig;
