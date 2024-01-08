import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {disorderSeverityA} from '../../../utils/somatic';
import {
  disorderSeverityB,
  disorderSeverityC,
  disorderSeverityD,
  disorderSeverityE,
  disorderSeverityF,
} from '../../../utils/sleep';
import {disorderSeverityG, disorderSeverityH} from '../../../utils/sexual';
import {
  disorderSeverityI,
  disorderSeverityJ,
  disorderSeverityK,
} from '../../../utils/neurodevelopmental';
import {
  disorderSeverityL,
  disorderSeverityM,
  disorderSeverityO,
  disorderSeverityP,
} from '../../../utils/paraphilic';

// @ts-ignore
function CardDiagnoseSeverity({isDarkMode, setSeverity, result}) {
  let additionalData;

  if (result === 'Psychological Factors Affecting Other Medical Conditions') {
    additionalData = disorderSeverityA;
  } else if (result === 'Hypersomnolence Disorder') {
    additionalData = disorderSeverityB;
  } else if (result === 'Narcolepsy') {
    additionalData = disorderSeverityC;
  } else if (result === 'Obstructive Sleep Apnea Hypoapnea') {
    additionalData = disorderSeverityD;
  } else if (result === 'Nightmare Disorder') {
    additionalData = disorderSeverityE;
  } else if (result === 'Substance/Medication-Induced Sleep Disorder') {
    additionalData = disorderSeverityF;
  } else if (
    result === 'Delayed Ejaculation' ||
    result === 'Erectile Disorder' ||
    result === 'Female Orgasmic Disorder' ||
    result === 'Arousal Disorder' ||
    result === 'Penetration Disorder' ||
    result === 'Male Hypoactive Sexual Desire Disorder' ||
    result === 'Premature (Early) Ejaculation'
  ) {
    additionalData = disorderSeverityG;
  } else if (result === 'Substance/Medication-Induced Sexual Dysfunction') {
    additionalData = disorderSeverityH;
  } else if (result === 'Attention-Deficit/Hyperactivity Disorder') {
    additionalData = disorderSeverityI;
  } else if (result === 'Specific Learning Disorder') {
    additionalData = disorderSeverityJ;
  } else if (result === 'Stereotypic Movement Disorder') {
    additionalData = disorderSeverityK;
  } else if (
    result === 'Voyeuristic Disorder' ||
    result === 'Frotteuristic Disorder' ||
    result === 'Sexual Sadism Disorder' ||
    result === 'Fetishistic Disorder' ||
    result === 'Transvestic Disorder'
  ) {
    additionalData = disorderSeverityL;
  } else if (result === 'Exhibitionistic Disorder') {
    additionalData = disorderSeverityM;
  } else if (result === 'Sexual Masochism Disorder') {
    additionalData = disorderSeverityO;
  } else if (result === 'Pedophilic Disorder') {
    additionalData = disorderSeverityP;
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
