import React, {useEffect, useState} from 'react';
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

import {traumaDiagnosis} from '../../../utils/trauma';

// @ts-ignore
function HomeDiagnose({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);

  const [result, setResult] = useState('');
  const [filter, setFilter] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [criteriaInstance, setCriteriaInstance] = useState(0);

  const clearBigCard = () => {
    setCriteriaInstance(0);
    setResult('');
  };

  const addBigCard = () => {
    setCriteriaInstance(prevCount => prevCount + 1);
  };

  const handleDiagnose = () => {
    setShowResult(true);
  };

  // Handle Results
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    if (filter === 'a') {
      setResult(traumaDiagnosis(numbers));
    }
  }, [filter, numbers]);

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
          <CardDiagnoseResult
            isDarkMode={isDarkMode}
            result={result}
            showResult={showResult}
          />
          <CardDiagnoseSmall
            isDarkMode={isDarkMode}
            clearBigCard={clearBigCard}
            addBigCard={addBigCard}
            handleDiagnose={handleDiagnose}
            filter={filter}
          />
          <CardDiagnoseFilter isDarkMode={isDarkMode} setFilter={setFilter} />
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
