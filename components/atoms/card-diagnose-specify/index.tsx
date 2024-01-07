import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {
  disorderSpecificationA,
  disorderSpecificationB,
} from '../../../utils/somatic';

import {
  disorderSpecificationC,
  disorderSpecificationD,
} from '../../../utils/sleep';

// @ts-ignore
function CardDiagnoseSpecify({isDarkMode, setSpecification, result}) {
  let additionalData;

  if (result === 'Conversion Disorder') {
    additionalData = disorderSpecificationA;
  } else if (result === 'Factitious Disorder') {
    additionalData = disorderSpecificationB;
  } else if (result === 'Insomnia Disorder') {
    additionalData = disorderSpecificationC;
  } else if (result === 'Hypersomnolence Disorder') {
    additionalData = disorderSpecificationD;
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
        setValue={setSpecification}
      />
    </DiagnoseResultCard>
  );
}

export default CardDiagnoseSpecify;
