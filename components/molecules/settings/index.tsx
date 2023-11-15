import React, {useState} from 'react';
import {Image, ScrollView, Switch} from 'react-native';

import {
  BodyContainer,
  HeaderContainer,
  SettingsCard,
  SettingsCardLeft,
  SettingsCardRight,
  StyledView,
} from '../../../styles/form-container';

import {
  contentText,
  StyledText20,
  StyledText16,
} from '../../../styles/form-text';

// @ts-ignore
function HomeSettings({isDarkMode, setIsDarkMode}) {
  const contentStyle = contentText(isDarkMode);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

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
            <SettingsCardRight>
              <Switch
                trackColor={{false: '#767577', true: '#518cff'}}
                thumbColor={isDarkMode ? '#ffffff' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isDarkMode}
              />
            </SettingsCardRight>
          </SettingsCard>
        </ScrollView>
      </BodyContainer>
    </StyledView>
  );
}

export default HomeSettings;
