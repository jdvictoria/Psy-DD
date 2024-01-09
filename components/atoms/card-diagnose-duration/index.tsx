import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {conversionDuration, factitiousDuration} from '../../../utils/somatic';

// @ts-ignore
function CardDiagnoseDuration({isDarkMode, setDuration, result}) {
  let additionalData;

  if (result === 'Conversion Disorder') {
    additionalData = conversionDuration;
  } else if (result === 'Factitious Disorder') {
    additionalData = factitiousDuration;
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
