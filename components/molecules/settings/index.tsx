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
import CardSettings from '../../atoms/card-settings';

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
            marginTop: 25,
          }}
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}>
          <CardSettings
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            icon={
              isDarkMode
                ? require('../../../assets/icons/darkmode-icon_dark.png')
                : require('../../../assets/icons/darkmode-icon.png')
            }
            text={'Toggle Dark Mode'}
            rightIcon={true}
          />
          <CardSettings
            isDarkMode={isDarkMode}
            setIsDarkMode={null}
            icon={
              isDarkMode
                ? require('../../../assets/icons/logout-icon_dark.png')
                : require('../../../assets/icons/logout-icon.png')
            }
            text={'Log Out Session'}
            rightIcon={false}
          />
        </ScrollView>
      </BodyContainer>
    </StyledView>
  );
}

export default HomeSettings;
