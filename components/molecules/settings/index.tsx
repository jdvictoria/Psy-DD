import React from 'react';
import {Image, ScrollView} from 'react-native';

import {
  BodyContainer,
  HeaderContainer,
  SettingsCard,
  SettingsCardLeft,
  StyledView,
} from '../../../styles/form-container';

import {
  contentText,
  StyledText20,
  StyledText16,
} from '../../../styles/form-text';

// @ts-ignore
function HomeSettings({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);

  return (
    <StyledView>
      <HeaderContainer
        style={{backgroundColor: isDarkMode ? '#010919' : '#EFEFEF'}}>
        <StyledText20 style={[{alignSelf: 'flex-end'}, contentStyle.semibold]}>
          SETTINGS
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
          <SettingsCard
            style={{backgroundColor: isDarkMode ? '#041325' : '#FFFFFF'}}>
            <SettingsCardLeft>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'contain',
                  paddingRight: 50,
                }}
                source={
                  isDarkMode
                    ? require('../../../assets/icons/darkmode-icon_dark.png')
                    : require('../../../assets/icons/darkmode-icon.png')
                }
                alt={'Dark Mode'}
              />
              <StyledText16 style={contentStyle.medium}>
                {' '}
                Toggle Dark Mode
              </StyledText16>
            </SettingsCardLeft>
          </SettingsCard>
        </ScrollView>
      </BodyContainer>
    </StyledView>
  );
}

export default HomeSettings;
