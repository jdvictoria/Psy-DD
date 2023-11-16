import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import {
  BodyContainer,
  DiagnoseResultCard,
  DiagnoseResultLeft,
  DiagnoseResultRight,
  HeaderContainer,
  StyledView,
} from '../../../styles/form-container';

import {contentText, StyledText20} from '../../../styles/form-text';

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
          }}
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}>
          <DiagnoseResultCard
            style={{backgroundColor: isDarkMode ? '#041325' : '#FFFFFF'}}>
            <StyledText20 style={contentStyle.bold}>
              Result: {result}
            </StyledText20>
          </DiagnoseResultCard>
          <DiagnoseResultCard
            style={{
              backgroundColor: isDarkMode ? '#041325' : '#FFFFFF',
            }}>
            <DiagnoseResultLeft
              style={{
                backgroundColor: '#FE7762',
              }}>
              <StyledText20 style={contentStyle.semibold}>Clear</StyledText20>
            </DiagnoseResultLeft>
            <DiagnoseResultRight
              style={{
                backgroundColor: '#00A911',
              }}>
              <StyledText20 style={contentStyle.semibold}>
                Diagnose
              </StyledText20>
            </DiagnoseResultRight>
          </DiagnoseResultCard>
        </ScrollView>
      </BodyContainer>
    </StyledView>
  );
}

export default HomeDiagnose;
