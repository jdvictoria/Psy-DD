import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {
  conversionDuration,
  factorsDuration,
  factitiousDuration,
} from '../../../utils/somatic';
import {
  circaDuration,
  hyperDuration,
  insomniaDuration,
  narcoDuration,
  obsDuration,
} from '../../../utils/sleep';

// @ts-ignore
function CardDiagnoseDuration({isDarkMode, setDuration, result}) {
  let additionalData;

  if (result === 'Conversion Disorder') {
    additionalData = conversionDuration;
  } else if (
    result === 'Psychological Factors Affecting Other Medical Conditions'
  ) {
    additionalData = factorsDuration;
  } else if (result === 'Factitious Disorder') {
    additionalData = factitiousDuration;
  } else if (result === 'Insomnia Disorder') {
    additionalData = insomniaDuration;
  } else if (result === 'Hypersomnolence Disorder') {
    additionalData = hyperDuration;
  } else if (result === 'Narcolepsy') {
    additionalData = narcoDuration;
  } else if (result === 'Obstructive Sleep Apnea Hypopnea') {
    additionalData = obsDuration;
  } else if (result === 'Circadian Rhythm Sleep-Wake Disorders') {
    additionalData = circaDuration;
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
