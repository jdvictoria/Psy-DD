import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {conversionSeverity} from '../../../utils/somatic';
import {
  centralSeverity,
  circaSeverity,
  hyperSeverity,
  hypoSeverity,
  narcoSeverity,
} from '../../../utils/sleep';

// @ts-ignore
function CardDiagnoseSeverity({isDarkMode, setSeverity, result}) {
  let additionalData;

  if (result === 'Conversion Disorder') {
    additionalData = conversionSeverity;
  } else if (result === 'Hypersomnolence Disorder') {
    additionalData = hyperSeverity;
  } else if (result === 'Narcolepsy') {
    additionalData = narcoSeverity;
  } else if (result === 'Central Sleep Apnea') {
    additionalData = centralSeverity;
  } else if (result === 'Sleep-Related Hypoventilation') {
    additionalData = hypoSeverity;
  } else if (result === 'Circadian Rhythm Sleep-Wake Disorders') {
    additionalData = circaSeverity;
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
        label={'Severity'}
        value={null}
        setValue={setSeverity}
      />
    </DiagnoseResultCard>
  );
}

export default CardDiagnoseSeverity;
