import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';

import {
  BodyContainer,
  HeaderContainer,
  StyledView,
} from '../../../styles/form-container';
import {contentText, StyledText20} from '../../../styles/form-text';

import CardDiagnoseResult from '../../atoms/card-diagnose_result';
import CardDiagnoseSmall from '../../atoms/card-diagnose_small';
import CardDiagnoseBig from '../../atoms/card-diagnose_big';
import CardDiagnoseFilter from '../../atoms/card-diagnose-filter';
import CardDiagnoseDuration from '../../atoms/card-diagnose-duration';
import CardDiagnoseSpecify from '../../atoms/card-diagnose-specify';
import CardDiagnoseSeverity from '../../atoms/card-diagnose-severity';

import {traumaDiagnosis} from '../../../utils/a-trauma';
import {somaticDiagnosis} from '../../../utils/b-somatic';
import {sleepDiagnosis} from '../../../utils/c-sleep';
import {sexualDiagnosis} from '../../../utils/d-sexual';
import {schizophreniaDiagnosis} from '../../../utils/e-schizophrenia';
import {personalityDiagnosis} from '../../../utils/f-personality';
import {paraphilicDiagnosis} from '../../../utils/g-paraphilic';
import {obsessiveDiagnosis} from '../../../utils/h-obsessive';
import {neuroDiagnosis} from '../../../utils/i-neurodevelopmental';
import {substanceDiagnosis} from '../../../utils/j-substance';
import {anxietyDiagnosis} from '../../../utils/k-anxiety';

import {eliminationDiagnosis} from '../../../utils/p-elimination';
import {disruptiveDiagnosis} from '../../../utils/m-disruptive';
import {dissociativeDiagnosis} from '../../../utils/o-dissociative';
import {neurocognitiveDiagnosis} from '../../../utils/s-neurocognitive';
import {dsyphoriaDiagnosis} from '../../../utils/r-gender';
import {eatingDiagnosis} from '../../../utils/q-eating';
import {depressiveDiagnosis} from '../../../utils/n-depressive';
import {bipolarDiagnosis} from '../../../utils/l-bipolar';

function HomeDiagnose({isDarkMode}: any) {
  const contentStyle = contentText(isDarkMode);

  const [result, setResult] = useState('');

  const [duration, setDuration] = useState('');
  const [specification, setSpecification] = useState('');
  const [severity, setSeverity] = useState('');

  const [filter, setFilter] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [criteriaInstance, setCriteriaInstance] = useState(0);

  const clearBigCard = () => {
    setCriteriaInstance(0);
    setShowResult(false);
    setResult('');
    setDuration('');
    setSpecification('');
    setSeverity('');
    setNumbers([]);
  };

  const addBigCard = () => {
    setCriteriaInstance(prevCount => prevCount + 1);
  };

  const handleDiagnose = () => {
    setShowResult(true);
  };

  useEffect(() => {
    if (showResult) {
      switch (filter) {
        case 'a':
          setResult(traumaDiagnosis(numbers));
          break;
        case 'b':
          setResult(somaticDiagnosis(numbers));
          break;
        case 'c':
          setResult(sleepDiagnosis(numbers));
          break;
        case 'd':
          setResult(sexualDiagnosis(numbers));
          break;
        case 'e':
          setResult(schizophreniaDiagnosis(numbers));
          break;
        case 'f':
          setResult(personalityDiagnosis(numbers));
          break;
        case 'g':
          setResult(paraphilicDiagnosis(numbers));
          break;
        case 'h':
          setResult(obsessiveDiagnosis(numbers));
          break;
        case 'i':
          setResult(neuroDiagnosis(numbers));
          break;
        case 'j':
          setResult(substanceDiagnosis(numbers));
          break;
        case 'k':
          setResult(anxietyDiagnosis(numbers));
          break;
        case 'l':
          setResult(bipolarDiagnosis(numbers));
          break;
        case 'm':
          setResult(disruptiveDiagnosis(numbers));
          break;
        case 'n':
          setResult(depressiveDiagnosis(numbers));
          break;
        case 'o':
          setResult(dissociativeDiagnosis(numbers));
          break;
        case 'p':
          setResult(eliminationDiagnosis(numbers));
          break;
        case 'q':
          setResult(eatingDiagnosis(numbers));
          break;
        case 'r':
          setResult(dsyphoriaDiagnosis(numbers));
          break;
        case 's':
          setResult(neurocognitiveDiagnosis(numbers));
          break;
        default:
          break;
      }
    }
  }, [filter, numbers, showResult]);

  return (
    <StyledView>
      <HeaderContainer
        style={{backgroundColor: isDarkMode ? '#010919' : '#EFEFEF'}}>
        <StyledText20
          style={[
            {alignSelf: 'flex-end', paddingBottom: 15},
            contentStyle.semibold,
          ]}>
          DIAGNOSE
        </StyledText20>
      </HeaderContainer>
      <BodyContainer
        style={{backgroundColor: isDarkMode ? '#010919' : '#EFEFEF'}}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
            paddingBottom: 125,
          }}
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}>
          <CardDiagnoseFilter isDarkMode={isDarkMode} setFilter={setFilter} />
          <CardDiagnoseSmall
            isDarkMode={isDarkMode}
            clearBigCard={clearBigCard}
            addBigCard={addBigCard}
            handleDiagnose={handleDiagnose}
            disabled={numbers.length === 0}
          />
          {result !== '' && showResult && (
            <CardDiagnoseResult
              isDarkMode={isDarkMode}
              result={result}
              severity={severity}
              duration={duration}
              specification={specification}
              showResult={showResult}
            />
          )}
          {(result === 'Conversion Disorder' ||
            result === 'Hypersomnolence Disorder' ||
            result === 'Narcolepsy' ||
            result === 'Central Sleep Apnea' ||
            result === 'Sleep-Related Hypoventilation' ||
            result === 'Circadian Rhythm Sleep-Wake Disorders' ||
            result === 'Non–Rapid Eye Movement Sleep Arousal Disorders' ||
            result === 'Nightmare Disorder' ||
            result === 'Substance/Medication-Induced Sleep Disorder' ||
            result === 'Delayed Ejaculation' ||
            result === 'Erectile Disorder' ||
            result === 'Female Orgasmic Disorder' ||
            result === 'Arousal Disorder' ||
            result === 'Penetration Disorder' ||
            result === 'Male Hypoactive Sexual Desire Disorder' ||
            result === 'Premature (Early) Ejaculation' ||
            result === 'Substance/Medication-Induced Sexual Dysfunction' ||
            result === 'Delusional Disorder' ||
            result === 'Schizoaffective Disorder' ||
            result === 'Psychotic Disorder Due to Another Medical Condition' ||
            result === 'Personality Change Due to Another Medical Condition' ||
            result === 'Pedophilic Disorder' ||
            result === 'Fetishistic Disorder' ||
            result === 'Attention-Deficit/Hyperactivity Disorder' ||
            result === 'Specific Learning Disorder' ||
            result === 'Stereotypic Movement Disorder' ||
            result === 'Alcohol Use Disorder' ||
            result === 'Alcohol Withdrawal' ||
            result === 'Cannabis Use Disorder' ||
            result === 'Cannabis Intoxication' ||
            result === 'Phencyclidine Use Disorder' ||
            result === 'Other Hallucinogen Intoxication' ||
            result === 'Inhalant Use Disorder' ||
            result === 'Opioid Use Disorder' ||
            result === 'Opioid Intoxication' ||
            result === 'Sedative, Hypnotic, or Anxiolytic Use Disorder' ||
            result === 'Sedative, Hypnotic, or Anxiolytic Intoxication' ||
            result === 'Sedative, Hypnotic, or Anxiolytic Withdrawal' ||
            result === 'Stimulant Use Disorder' ||
            result === 'Stimulant Intoxication' ||
            result === 'Tobacco Use Disorder' ||
            result === 'Other (or Unknown) Substance Use Disorder' ||
            result === 'Other (or Unknown) Substance Withdrawal' ||
            result === 'Gambling Disorder' ||
            result === 'Specific Phobia' ||
            result === 'Substance / Medication-Induced Anxiety Disorder' ||
            result ===
              'Major / Mild Neurocognitive Disorder Due to Huntington’s Disease' ||
            result ===
              'Major / Mild Neurocognitive Disorder Due to Parkinson’s Disease' ||
            result ===
              'Major / Mild Neurocognitive Disorder Due to Prion Disease' ||
            result ===
              'Major / Mild Neurocognitive Disorder Due to HIV Infection' ||
            result ===
              'Substance/Medication-Induced Major / Mild Neurocognitive Disorder' ||
            result ===
              'Major / Mild Neurocognitive Disorder due to Traumatic Brain Injury' ||
            result === 'Major / Mild Vascular Neurocognitive Disorder' ||
            result === 'Probable Frontotemporal Neurocognitive Disorder' ||
            result === 'Major Neurocognitive Disorder' ||
            result ===
              'Major / Mild Neurocognitive Disorder due to Alzheimer’s Disease' ||
            result ===
              'Major / Mild Neurocognitive Disorder with Lewy Bodies' ||
            result === 'Delirium' ||
            result === 'Persistent Depressive Disorder' ||
            result === 'Major Depressive Disorder' ||
            result === 'Depressive Disorder Due to Another Medical Condition' ||
            result ===
              'Bipolar and Related Disorder Due to Another Medical Condition' ||
            result ===
              'Substance/Medication-Induced Bipolar and Related Disorder') && (
            <CardDiagnoseSeverity
              isDarkMode={isDarkMode}
              setSeverity={setSeverity}
              result={result}
            />
          )}

          {(result === 'Conversion Disorder' ||
            result ===
              'Psychological Factors Affecting Other Medical Conditions' ||
            result === 'Factitious Disorder' ||
            result === 'Insomnia Disorder' ||
            result === 'Hypersomnolence Disorder' ||
            result === 'Narcolepsy' ||
            result === 'Obstructive Sleep Apnea Hypopnea' ||
            result === 'Circadian Rhythm Sleep-Wake Disorders' ||
            result === 'Nightmare Disorder' ||
            result === 'Delayed Ejaculation' ||
            result === 'Erectile Disorder' ||
            result === 'Female Orgasmic Disorder' ||
            result === 'Arousal Disorder' ||
            result === 'Penetration Disorder' ||
            result === 'Male Hypoactive Sexual Desire Disorder' ||
            result === 'Premature (Early) Ejaculation' ||
            result === 'Substance/Medication-Induced Sexual Dysfunction' ||
            result === 'Delusional Disorder' ||
            result === 'Schizophrenia' ||
            result === 'Schizoaffective Disorder' ||
            result === 'Voyeuristic Disorder' ||
            result === 'Exhibitionistic Disorder' ||
            result === 'Frotteuristic Disorder' ||
            result === 'Sexual Masochism Disorder' ||
            result === 'Sexual Sadism Disorder' ||
            result === 'Fetishistic Disorder' ||
            result === 'Transvestic Disorder' ||
            result === 'Attention-Deficit/Hyperactivity Disorder' ||
            result === 'Specific Learning Disorder' ||
            result === 'Alcohol Use Disorder' ||
            result === 'Cannabis Use Disorder' ||
            result === 'Phencyclidine Use Disorder' ||
            result === 'Inhalant Use Disorder' ||
            result === 'Sedative, Hypnotic, or Anxiolytic Use Disorder' ||
            result === 'Stimulant Use Disorder' ||
            result === 'Tobacco Use Disorder' ||
            result === 'Other (or Unknown) Substance Use Disorder' ||
            result === 'Gambling Disorder' ||
            result === 'Delirium' ||
            result === 'Major Neurocognitive Disorder' ||
            result === 'Persistent Depressive Disorder') && (
            <CardDiagnoseDuration
              isDarkMode={isDarkMode}
              setDuration={setDuration}
              result={result}
            />
          )}

          {(result === 'Conversion Disorder' ||
            result === 'Factitious Disorder' ||
            result === 'Insomnia Disorder' ||
            result === 'Hypersomnolence Disorder' ||
            result === 'Narcolepsy' ||
            result === 'Circadian Rhythm Sleep-Wake Disorders' ||
            result === 'Nightmare Disorder' ||
            result === 'Substance/Medication-Induced Sleep Disorder' ||
            result === 'Substance/Medication-Induced Sexual Dysfunction' ||
            result === 'Delusional Disorder' ||
            result === 'Brief Psychotic Disorder' ||
            result === 'Schizophreniform Disorder' ||
            result === 'Schizophrenia' ||
            result === 'Schizoaffective Disorder' ||
            result === 'Substance/Medication-Induced Psychotic Disorder' ||
            result ===
              'Unspecified Schizophrenia Spectrum and Other Psychotic Disorder' ||
            result === 'Exhibitionistic Disorder' ||
            result === 'Sexual Masochism Disorder' ||
            result === 'Pedophilic Disorder' ||
            result === 'Transvestic Disorder' ||
            result === 'Obsessive-Compulsive Disorder' ||
            result === 'Body Dysmorphic Disorder' ||
            result === 'Hoarding Disorder' ||
            result ===
              'Obsessive-Compulsive and Related Disorder Due to Another Medical Condition' ||
            result ===
              'Substance/Medication-Induce Obsessive-Compulsive and Related Disorder' ||
            result === 'Autism Spectrum Disorder' ||
            result === 'Stereotypic Movement Disorder' ||
            result === 'Persistent (Chronic) Motor or Vocal Tic Disorder' ||
            result === 'Alcohol Withdrawal' ||
            result === 'Sedative, Hypnotic, or Anxiolytic Withdrawal' ||
            result === 'Stimulant Withdrawal' ||
            result === 'Tobacco Use Disorder' ||
            result === 'Social Anxiety Disorder' ||
            result === 'Delirium' ||
            result === 'Major Neurocognitive Disorder' ||
            result === 'Persistent Depressive Disorder' ||
            result === 'Substance/Medication-Induced Depressive Disorder' ||
            result ===
              'Substance/Medication-Induced Bipolar and Related Disorder' ||
            result === 'Cyclothymic Disorder') && (
            <CardDiagnoseSpecify
              isDarkMode={isDarkMode}
              setSpecification={setSpecification}
              result={result}
            />
          )}

          {[...Array(criteriaInstance)].map((_, index) => (
            <CardDiagnoseBig
              key={index}
              isDarkMode={isDarkMode}
              filter={filter}
              setNumbers={setNumbers}
              bigCardCount={String.fromCharCode('A'.charCodeAt(0) + index)}
            />
          ))}
        </ScrollView>
      </BodyContainer>
    </StyledView>
  );
}

export default HomeDiagnose;
