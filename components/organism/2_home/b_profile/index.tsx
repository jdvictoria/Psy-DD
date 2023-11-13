import React from 'react';
import {ScrollView} from 'react-native';

import {
  BodyContainer,
  HeaderContainer,
  StyledView,
} from '../../../../styles/form-container';

import {contentText, SampleText} from '../../../../styles/form-text';

// @ts-ignore
function HomeProfile({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);

  return (
    <StyledView>
      <HeaderContainer
        style={{backgroundColor: isDarkMode ? '#010919' : '#F8FAFF'}}>
        <SampleText style={contentStyle.semibold}>PROFILE</SampleText>
      </HeaderContainer>
      <BodyContainer
        style={{backgroundColor: isDarkMode ? '#010919' : '#F8FAFF'}}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}
        />
      </BodyContainer>
    </StyledView>
  );
}

export default HomeProfile;
