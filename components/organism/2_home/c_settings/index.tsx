import React from 'react';
import {ScrollView} from 'react-native';

import {
  BodyContainer,
  HeaderContainer,
  StyledView,
} from '../../../../styles/form-container';

import {contentText, StyledText20} from '../../../../styles/form-text';

// @ts-ignore
function HomeSettings({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);

  return (
    <StyledView>
      <HeaderContainer
        style={{backgroundColor: isDarkMode ? '#010919' : '#F8FAFF'}}>
        <StyledText20 style={[{alignSelf: 'flex-end'}, contentStyle.semibold]}>
          SETTINGS
        </StyledText20>
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

export default HomeSettings;
