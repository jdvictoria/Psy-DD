import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {conversionSeverity} from '../../../utils/somatic';
import {hyperSeverity} from '../../../utils/sleep';

// @ts-ignore
function CardDiagnoseSeverity({isDarkMode, setSeverity, result}) {
  let additionalData;

  if (result === 'Conversion Disorder') {
    additionalData = conversionSeverity;
  } else if (result === 'Hypersomnolence Disorder') {
    additionalData = hyperSeverity;
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
