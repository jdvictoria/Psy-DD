import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {disorderABAdditional} from '../../../utils/somatic';

// @ts-ignore
function CardDiagnoseSpecify({isDarkMode, setAdditional, result}) {
  let additionalData;

  if (
    result === 'Somatic Symptom Disorder' ||
    result === 'Illness Anxiety Disorder'
  ) {
    additionalData = disorderABAdditional;
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
        label={'Specification'}
        value={null}
        setValue={setAdditional}
      />
    </DiagnoseResultCard>
  );
}

export default CardDiagnoseSpecify;
