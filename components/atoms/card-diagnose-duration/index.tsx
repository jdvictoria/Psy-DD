import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {disorderDurationA} from '../../../utils/somatic';

// @ts-ignore
function CardDiagnoseDuration({isDarkMode, setDuration, result}) {
  let additionalData;

  if (
    result === 'Somatic Symptom Disorder' ||
    result === 'Illness Anxiety Disorder' ||
    result === 'Conversion Disorder'
  ) {
    additionalData = disorderDurationA;
  }

  return (
    <DiagnoseResultCard
      style={{
        backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF',
        height: 80,
        paddingBottom: 7.5,
      }}>
      <DropdownComponent
        isDarkMode={isDarkMode}
        data={additionalData}
        label={'Duration'}
        value={null}
        setValue={setDuration}
      />
    </DiagnoseResultCard>
  );
}

export default CardDiagnoseDuration;
