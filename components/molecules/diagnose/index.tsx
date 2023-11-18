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

// @ts-ignore
function HomeDiagnose({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);

  const [result, setResult] = useState('');

  return (
    <StyledView>
      <HeaderContainer
        style={{backgroundColor: isDarkMode ? '#010919' : '#EFEFEF'}}>
        <StyledText20 style={[{alignSelf: 'flex-end'}, contentStyle.semibold]}>
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
          }}
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}>
          <CardDiagnoseResult isDarkMode={isDarkMode} result={result} />
          <CardDiagnoseSmall isDarkMode={isDarkMode} />
          <CardDiagnoseBig isDarkMode={isDarkMode} />
        </ScrollView>
      </BodyContainer>
    </StyledView>
  );
}

export default HomeDiagnose;
