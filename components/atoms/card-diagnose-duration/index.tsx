import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {disorderDurationA, disorderDurationB} from '../../../utils/somatic';
import {
  disorderDurationC,
  disorderDurationD,
  disorderDurationE,
  disorderDurationF,
  disorderDurationG,
} from '../../../utils/sleep';

// @ts-ignore
function CardDiagnoseDuration({isDarkMode, setDuration, result}) {
  let additionalData;

  if (
    result === 'Somatic Symptom Disorder' ||
    result === 'Illness Anxiety Disorder' ||
    result === 'Conversion Disorder'
  ) {
    additionalData = disorderDurationA;
  } else if (result === 'Factitious Disorder') {
    additionalData = disorderDurationB;
  } else if (result === 'Insomnia Disorder') {
    additionalData = disorderDurationC;
  } else if (result === 'Hypersomnolence Disorder') {
    additionalData = disorderDurationD;
  } else if (result === 'Narcolepsy') {
    additionalData = disorderDurationE;
  } else if (result === 'Circadian Rhythm Sleep-Wake Disorder') {
    additionalData = disorderDurationF;
  } else if (result === 'Nightmare Disorder') {
    additionalData = disorderDurationG;
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
