import React from 'react-native';

import {DiagnoseResultCard} from '../../../styles/form-container';

// @ts-ignore
import DropdownComponent from '../dropdown-diagnose';

import {
  conversionDuration,
  factorsDuration,
  factitiousDuration,
} from '../../../utils/b-somatic';
import {
  circaDuration,
  hyperDuration,
  insomniaDuration,
  narcoDuration,
  obsDuration,
  nightmareDuration,
} from '../../../utils/c-sleep';
import {
  delayedDuration,
  erectileDuration,
  femArousalDuration,
  femOrgasmicDuration,
  hypoactiveDuration,
  penetrationDuration,
  prematureDuration,
  substanceSexualDuration,
} from '../../../utils/d-sexual';
import {
  delusionalDuration,
  schizoaffectiveDuration,
  schizophreniaDuration,
} from '../../../utils/e-schizophrenia';
import {
  exhibitionisticDuration,
  fetishisticDuration,
  frotteuristicDuration,
  masochistDuration,
  sadismDuration,
  transvesticDuration,
  voyeuristicDuration,
} from '../../../utils/g-paraphilic';
import {
  adhdDuration,
  specificLearningDuration,
} from '../../../utils/i-neurodevelopmental';
import {
  alcoholUseDuration,
  cannabisUseDuration,
  gamblingDuration,
  inhalantUseDuration,
  otherUnknownUseDuration,
  phencyclidineUseDuration,
  sedativeUseDuration,
  stimulantUseDuration,
  tobaccoUseDuration,
} from '../../../utils/j-substance';

// @ts-ignore
function CardDiagnoseDuration({isDarkMode, setDuration, result}) {
  let additionalData;

  if (result === 'Conversion Disorder') {
    additionalData = conversionDuration;
  } else if (
    result === 'Psychological Factors Affecting Other Medical Conditions'
  ) {
    additionalData = factorsDuration;
  } else if (result === 'Factitious Disorder') {
    additionalData = factitiousDuration;
  } else if (result === 'Insomnia Disorder') {
    additionalData = insomniaDuration;
  } else if (result === 'Hypersomnolence Disorder') {
    additionalData = hyperDuration;
  } else if (result === 'Narcolepsy') {
    additionalData = narcoDuration;
  } else if (result === 'Obstructive Sleep Apnea Hypopnea') {
    additionalData = obsDuration;
  } else if (result === 'Circadian Rhythm Sleep-Wake Disorders') {
    additionalData = circaDuration;
  } else if (result === 'Nightmare Disorder') {
    additionalData = nightmareDuration;
  } else if (result === 'Delayed Ejaculation') {
    additionalData = delayedDuration;
  } else if (result === 'Erectile Disorder') {
    additionalData = erectileDuration;
  } else if (result === 'Female Orgasmic Disorder') {
    additionalData = femOrgasmicDuration;
  } else if (result === 'Arousal Disorder') {
    additionalData = femArousalDuration;
  } else if (result === 'Penetration Disorder') {
    additionalData = penetrationDuration;
  } else if (result === 'Male Hypoactive Sexual Desire Disorder') {
    additionalData = hypoactiveDuration;
  } else if (result === 'Premature (Early) Ejaculation') {
    additionalData = prematureDuration;
  } else if (result === 'Substance/Medication-Induced Sexual Dysfunction') {
    additionalData = substanceSexualDuration;
  } else if (result === 'Delusional Disorder') {
    additionalData = delusionalDuration;
  } else if (result === 'Schizophrenia') {
    additionalData = schizophreniaDuration;
  } else if (result === 'Schizoaffective Disorder') {
    additionalData = schizoaffectiveDuration;
  } else if (result === 'Voyeuristic Disorder') {
    additionalData = voyeuristicDuration;
  } else if (result === 'Exhibitionistic Disorder') {
    additionalData = exhibitionisticDuration;
  } else if (result === 'Frotteuristic Disorder') {
    additionalData = frotteuristicDuration;
  } else if (result === 'Sexual Masochism Disorder') {
    additionalData = masochistDuration;
  } else if (result === 'Sexual Sadism Disorder') {
    additionalData = sadismDuration;
  } else if (result === 'Fetishistic Disorder') {
    additionalData = fetishisticDuration;
  } else if (result === 'Transvestic Disorder') {
    additionalData = transvesticDuration;
  } else if (result === 'Attention-Deficit/Hyperactivity Disorder') {
    additionalData = adhdDuration;
  } else if (result === 'Specific Learning Disorder') {
    additionalData = specificLearningDuration;
  } else if (result === 'Alcohol Use Disorder') {
    additionalData = alcoholUseDuration;
  } else if (result === 'Cannabis Use Disorder') {
    additionalData = cannabisUseDuration;
  } else if (result === 'Phencyclidine Use Disorder') {
    additionalData = phencyclidineUseDuration;
  } else if (result === 'Inhalant Use Disorder') {
    additionalData = inhalantUseDuration;
  } else if (result === 'Sedative, Hypnotic, or Anxiolytic Use Disorder') {
    additionalData = sedativeUseDuration;
  } else if (result === 'Stimulant Use Disorder') {
    additionalData = stimulantUseDuration;
  } else if (result === 'Tobacco Use Disorder') {
    additionalData = tobaccoUseDuration;
  } else if (result === 'Other (or Unknown) Substance Use Disorder') {
    additionalData = otherUnknownUseDuration;
  } else if (result === 'Gambling Disorder') {
    additionalData = gamblingDuration;
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
