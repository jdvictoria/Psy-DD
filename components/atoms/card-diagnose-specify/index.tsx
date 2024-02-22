import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {
  conversionSpecification,
  factitiousSpecification,
} from '../../../utils/b-somatic';
import {
  circaSpecification,
  hyperSpecification,
  insomniaSpecification,
  narcoSpecification,
} from '../../../utils/sleep';

// @ts-ignore
function CardDiagnoseSpecify({isDarkMode, setSpecification, result}) {
  let additionalData;

  if (result === 'Conversion Disorder') {
    additionalData = conversionSpecification;
  } else if (result === 'Factitious Disorder') {
    additionalData = factitiousSpecification;
  } else if (result === 'Insomnia Disorder') {
    additionalData = insomniaSpecification;
  } else if (result === 'Hypersomnolence Disorder') {
    additionalData = hyperSpecification;
  } else if (result === 'Narcolepsy') {
    additionalData = narcoSpecification;
  } else if (result === 'Circadian Rhythm Sleep-Wake Disorders') {
    additionalData = circaSpecification;
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
