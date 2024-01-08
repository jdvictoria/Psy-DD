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
  disorderSpecificationE,
  disorderSpecificationF,
  disorderSpecificationG,
  disorderSpecificationH,
  disorderSpecificationI,
  disorderSpecificationJ,
  disorderSpecificationK,
} from '../../../utils/sleep';
import {disorderSpecificationL} from '../../../utils/sexual';
import {
  disorderSpecificationM,
  disorderSpecificationN,
  disorderSpecificationO,
  disorderSpecificationP,
} from '../../../utils/neurodevelopmental';
import {disorderSpecificationQ} from '../../../utils/personality';

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
  } else if (result === 'Narcolepsy') {
    additionalData = disorderSpecificationE;
  } else if (result === 'Central Sleep Apnea') {
    additionalData = disorderSpecificationF;
  } else if (result === 'Sleep-Related Hypoventilation') {
    additionalData = disorderSpecificationG;
  } else if (result === 'Circadian Rhythm Sleep-Wake Disorder') {
    additionalData = disorderSpecificationH;
  } else if (result === 'Non–Rapid Eye Movement Sleep Arousal Disorder') {
    additionalData = disorderSpecificationI;
  } else if (result === 'Nightmare Disorder') {
    additionalData = disorderSpecificationJ;
  } else if (result === 'Substance/Medication-Induced Sleep Disorder') {
    additionalData = disorderSpecificationK;
  } else if (result === 'Substance/Medication-Induced Sexual Dysfunction') {
    additionalData = disorderSpecificationL;
  } else if (result === 'Autism Spectrum Disorder') {
    additionalData = disorderSpecificationM;
  } else if (result === 'Attention-Deficit/Hyperactivity Disorder') {
    additionalData = disorderSpecificationN;
  } else if (result === 'Specific Learning Disorder') {
    additionalData = disorderSpecificationO;
  } else if (result === 'Persistent (Chronic) Motor or Vocal Tic Disorder') {
    additionalData = disorderSpecificationP;
  } else if (result === 'Personality Change Due to Another Medical Condition') {
    additionalData = disorderSpecificationQ;
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
