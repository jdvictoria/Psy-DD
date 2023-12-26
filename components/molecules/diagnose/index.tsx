import React, {useState} from 'react';
import {ScrollView, Image} from 'react-native';

import {
  BodyContainer,
  HeaderContainer,
  StyledView,
} from '../../../styles/form-container';

import {contentText, StyledText20} from '../../../styles/form-text';

import CardDiagnoseResult from '../../atoms/card-diagnose_result';
import CardDiagnoseSmall from '../../atoms/card-diagnose_small';
import CardDiagnoseBig from '../../atoms/card-diagnose_big';
import CardDiagnoseFilter from "../../atoms/card-diagnose-filter";

// @ts-ignore
function HomeDiagnose({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);

  const [result, setResult] = useState('');
  const [filter, setFilter] = useState('');

  console.log(filter);
  const [bigCardCount, setBigCardCount] = useState(0);

  const clearBigCard = () => {
    setBigCardCount(0);
  };

  const addBigCard = () => {
    setBigCardCount(prevCount => prevCount + 1);
  };

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
          <CardDiagnoseResult isDarkMode={isDarkMode} result={result} />
          <CardDiagnoseSmall
            isDarkMode={isDarkMode}
            clearBigCard={clearBigCard}
            addBigCard={addBigCard}
            filter={filter}
          />
          <CardDiagnoseFilter isDarkMode={isDarkMode} setFilter={setFilter} />
          {[...Array(bigCardCount)].map((_, index) => (
            <CardDiagnoseBig key={index} isDarkMode={isDarkMode} filter={filter}/>
          ))}
        </ScrollView>
      </BodyContainer>
    </StyledView>
  );
}

export default HomeDiagnose;
