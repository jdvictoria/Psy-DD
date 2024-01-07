import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {
  disorderSpecificationA,
  disorderSpecificationB,
  disorderSpecificationC,
} from '../../../utils/somatic';

import {
  disorderSpecificationD,
  disorderSpecificationE,
} from '../../../utils/sleep';

// @ts-ignore
function CardDiagnoseSpecify({isDarkMode, setSpecification, result}) {
  let additionalData;

  if (result === 'Conversion Disorder') {
    additionalData = disorderSpecificationA;
  } else if (
    result === 'Psychological Factors Affecting Other Medical Conditions'
  ) {
    additionalData = disorderSpecificationB;
  } else if (result === 'Factitious Disorder') {
    additionalData = disorderSpecificationC;
  } else if (result === 'Insomnia Disorder') {
    additionalData = disorderSpecificationD;
  } else if (result === 'Hypersomnolence Disorder') {
    additionalData = disorderSpecificationE;
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
