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
  nightmareSpecification,
  substanceSleepSpecification,
} from '../../../utils/c-sleep';
import {substanceSexualSpecification} from '../../../utils/d-sexual';
import {
  delusionalSpecification,
  otherSchizophreniaSpecification,
  psychoticSpecification,
  schizoaffectiveSpecification,
  schizophreniaSpecification,
  schizophreniformSpecification,
  substancePsychoticSpecification,
} from '../../../utils/e-schizophrenia';
import {
  exhibitionisticSpecification,
  masochistSpecification,
  pedophilicSpecification,
  transvesticSpecification,
} from '../../../utils/g-paraphilic';
import {
  dysmorphicSpecification,
  hoardingSpecification,
  ocdDueToAnotherSpecification,
  ocdSpecification,
  substanceObsessiveSpecification,
} from '../../../utils/h-obsessive';
import {
  autismSpecification,
  movementSpecification,
  ticSpecification,
} from '../../../utils/i-neurodevelopmental';
import {
  alcoholWithdrawalSpecification,
  sedativeWithdrawalSpecification,
  stimulantIntoxicationSpecification,
  tobaccoUseSpecification,
} from '../../../utils/j-substance';

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
  } else if (result === 'Nightmare Disorder') {
    additionalData = nightmareSpecification;
  } else if (result === 'Substance/Medication-Induced Sleep Disorder') {
    additionalData = substanceSleepSpecification;
  } else if (result === 'Substance/Medication-Induced Sexual Dysfunction') {
    additionalData = substanceSexualSpecification;
  } else if (result === 'Delusional Disorder') {
    additionalData = delusionalSpecification;
  } else if (result === 'Brief Psychotic Disorder') {
    additionalData = psychoticSpecification;
  } else if (result === 'Schizophreniform Disorder') {
    additionalData = schizophreniformSpecification;
  } else if (result === 'Schizophrenia') {
    additionalData = schizophreniaSpecification;
  } else if (result === 'Schizoaffective Disorder') {
    additionalData = schizoaffectiveSpecification;
  } else if (result === 'Substance/Medication-Induced Psychotic Disorder') {
    additionalData = substancePsychoticSpecification;
  } else if (
    result === 'Unspecified Schizophrenia Spectrum and Other Psychotic Disorder'
  ) {
    additionalData = otherSchizophreniaSpecification;
  } else if (result === 'Exhibitionistic Disorder') {
    additionalData = exhibitionisticSpecification;
  } else if (result === 'Sexual Masochism Disorder') {
    additionalData = masochistSpecification;
  } else if (result === 'Pedophilic Disorder') {
    additionalData = pedophilicSpecification;
  } else if (result === 'Transvestic Disorder') {
    additionalData = transvesticSpecification;
  } else if (result === 'Obsessive-Compulsive Disorder') {
    additionalData = ocdSpecification;
  } else if (result === 'Body Dysmorphic Disorder') {
    additionalData = dysmorphicSpecification;
  } else if (result === 'Hoarding Disorder') {
    additionalData = hoardingSpecification;
  } else if (
    result ===
    'Obsessive-Compulsive and Related Disorder Due to Another Medical Condition'
  ) {
    additionalData = ocdDueToAnotherSpecification;
  } else if (
    result ===
    'Substance/Medication-Induce Obsessive-Compulsive and Related Disorder'
  ) {
    additionalData = substanceObsessiveSpecification;
  } else if (result === 'Autism Spectrum Disorder') {
    additionalData = autismSpecification;
  } else if (result === 'Stereotypic Movement Disorder') {
    additionalData = movementSpecification;
  } else if (result === 'Persistent (Chronic) Motor or Vocal Tic Disorder') {
    additionalData = ticSpecification;
  } else if (result === 'Alcohol Withdrawal') {
    additionalData = alcoholWithdrawalSpecification;
  } else if (result === 'Sedative, Hypnotic, or Anxiolytic Withdrawal') {
    additionalData = sedativeWithdrawalSpecification;
  } else if (result === 'Stimulant Withdrawal') {
    additionalData = stimulantIntoxicationSpecification;
  } else if (result === 'Tobacco Use Disorder') {
    additionalData = tobaccoUseSpecification;
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
