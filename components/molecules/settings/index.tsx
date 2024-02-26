import React from 'react';
import {ScrollView} from 'react-native';

import {
  BodyContainer,
  HeaderContainer,
  StyledView,
} from '../../../styles/form-container';

import {contentText, StyledText20} from '../../../styles/form-text';
import CardSettings from '../../atoms/card-settings';
import auth from '@react-native-firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

// @ts-ignore
function HomeSettings({navigation, isDarkMode, setIsDarkMode}) {
  const contentStyle = contentText(isDarkMode);

  const handleLogout = async () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
      });

    await AsyncStorage.setItem('uid', '');
    await AsyncStorage.setItem('auth', JSON.stringify(false));
    await AsyncStorage.setItem('data', JSON.stringify({}));

    navigation.navigate('Auth');
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
            handleLogOut={null}
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
            handleLogOut={handleLogout}
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
