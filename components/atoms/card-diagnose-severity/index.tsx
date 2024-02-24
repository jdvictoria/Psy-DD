import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {conversionSeverity} from '../../../utils/b-somatic';
import {
  centralSeverity,
  circaSeverity,
  eyeSeverity,
  hyperSeverity,
  hypoSeverity,
  narcoSeverity,
  nightmareSeverity,
  substanceSleepSeverity,
} from '../../../utils/c-sleep';
import {
  delayedSeverity,
  erectileSeverity,
  femArousalSeverity,
  femOrgasmicSeverity,
  hypoactiveSeverity,
  penetrationSeverity,
  prematureSeverity,
  substanceSexualSeverity,
} from '../../../utils/d-sexual';
import {
  delusionalSeverity,
  psychoticDueToAnotherSeverity,
  schizoaffectiveSeverity,
} from '../../../utils/e-schizophrenia';
import {personalityDueToAnotherSeverity} from '../../../utils/f-personality';
import {
  fetishisticSeverity,
  pedophilicSeverity,
} from '../../../utils/g-paraphilic';

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
  } else if (result === 'Non–Rapid Eye Movement Sleep Arousal Disorders') {
    additionalData = eyeSeverity;
  } else if (result === 'Nightmare Disorder') {
    additionalData = nightmareSeverity;
  } else if (result === 'Substance/Medication-Induced Sleep Disorder') {
    additionalData = substanceSleepSeverity;
  } else if (result === 'Delayed Ejaculation') {
    additionalData = delayedSeverity;
  } else if (result === 'Erectile Disorder') {
    additionalData = erectileSeverity;
  } else if (result === 'Female Orgasmic Disorder') {
    additionalData = femOrgasmicSeverity;
  } else if (result === 'Arousal Disorder') {
    additionalData = femArousalSeverity;
  } else if (result === 'Penetration Disorder') {
    additionalData = penetrationSeverity;
  } else if (result === 'Male Hypoactive Sexual Desire Disorder') {
    additionalData = hypoactiveSeverity;
  } else if (result === 'Premature (Early) Ejaculation') {
    additionalData = prematureSeverity;
  } else if (result === 'Substance/Medication-Induced Sexual Dysfunction') {
    additionalData = substanceSexualSeverity;
  } else if (result === 'Delusional Disorder') {
    additionalData = delusionalSeverity;
  } else if (result === 'Schizoaffective Disorder') {
    additionalData = schizoaffectiveSeverity;
  } else if (result === 'Psychotic Disorder Due to Another Medical Condition') {
    additionalData = psychoticDueToAnotherSeverity;
  } else if (result === 'Personality Change Due to Another Medical Condition') {
    additionalData = personalityDueToAnotherSeverity;
  } else if (result === 'Pedophilic Disorder') {
    additionalData = pedophilicSeverity;
  } else if (result === 'Fetishistic Disorder') {
    additionalData = fetishisticSeverity;
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
