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
import {
  disorderSpecificationR,
  disorderSpecificationS,
  disorderSpecificationT,
  disorderSpecificationU,
} from '../../../utils/paraphilic';
import {
  disorderSpecificationAA,
  disorderSpecificationV,
  disorderSpecificationW,
  disorderSpecificationX,
  disorderSpecificationY,
  disorderSpecificationZ,
} from '../../../utils/schizophrenia';

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
  } else if (result === 'Exhibitionistic Disorder') {
    additionalData = disorderSpecificationR;
  } else if (result === 'Pedophilic Disorder') {
    additionalData = disorderSpecificationS;
  } else if (result === 'Fetishistic Disorder') {
    additionalData = disorderSpecificationT;
  } else if (result === 'Transvestic Disorder') {
    additionalData = disorderSpecificationU;
  } else if (result === 'Delusional Disorder') {
    additionalData = disorderSpecificationV;
  } else if (result === 'Brief Psychotic Disorder') {
    additionalData = disorderSpecificationW;
  } else if (result === 'Schizophreniform Disorder') {
    additionalData = disorderSpecificationX;
  } else if (result === 'Schizoaffective Disorder') {
    additionalData = disorderSpecificationY;
  } else if (result === 'Substance/Medication-Induced Psychotic Disorder') {
    additionalData = disorderSpecificationZ;
  } else if (
    result ===
    'Other Specified Schizophrenia Spectrum and Other Psychotic Disorder'
  ) {
    additionalData = disorderSpecificationAA;
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
