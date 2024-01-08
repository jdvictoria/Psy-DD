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

import {traumaDiagnosis} from '../../../utils/trauma';
import {somaticDiagnosis} from '../../../utils/somatic';
import {sleepDiagnosis} from '../../../utils/sleep';
import CardDiagnoseSeverity from '../../atoms/card-diagnose-severity';

// @ts-ignore
function HomeDiagnose({isDarkMode}) {
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
    if (filter === 'a' && showResult) {
      setResult(traumaDiagnosis(numbers));
    }
  }, [filter, numbers, showResult]);

  useEffect(() => {
    if (filter === 'b' && showResult) {
      setResult(somaticDiagnosis(numbers));
    }
  }, [filter, numbers, showResult]);

  useEffect(() => {
    if (filter === 'c' && showResult) {
      setResult(sleepDiagnosis(numbers));
    }
  }, [filter, numbers, showResult]);

  // console.log(numbers);
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
            result === 'Factitious Disorder' ||
            result === 'Insomnia Disorder' ||
            result === 'Hypersomnolence Disorder' ||
            result === 'Narcolepsy' ||
            result === 'Central Sleep Apnea') && (
            <CardDiagnoseSpecify
              isDarkMode={isDarkMode}
              setSpecification={setSpecification}
              result={result}
            />
          )}
          {(result === 'Somatic Symptom Disorder' ||
            result === 'Illness Anxiety Disorder' ||
            result === 'Conversion Disorder' ||
            result === 'Factitious Disorder' ||
            result === 'Insomnia Disorder' ||
            result === 'Hypersomnolence Disorder' ||
            result === 'Narcolepsy') && (
            <CardDiagnoseDuration
              isDarkMode={isDarkMode}
              setDuration={setDuration}
              result={result}
            />
          )}
          {(result ===
            'Psychological Factors Affecting Other Medical Conditions' ||
            result === 'Hypersomnolence Disorder' ||
            result === 'Narcolepsy' ||
            result === 'Obstructive Sleep Apnea Hypoapnea') && (
            <CardDiagnoseSeverity
              isDarkMode={isDarkMode}
              setSeverity={setSeverity}
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
