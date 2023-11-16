import React from 'react';
import {Image} from 'react-native';

import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';

import {NavigationContainer} from '@react-navigation/native';

import HomeDiagnose from '../../molecules/diagnose';
import HomeProfile from '../../molecules/profile';
import HomeSettings from '../../molecules/settings';

// @ts-ignore
function HomeNavigation({isDarkMode, setIsDarkMode}) {
  const Tabs = AnimatedTabBarNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator
        appearance={{
          floating: true,
          shadow: true,
          whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
          whenInactiveShow: TabElementDisplayOptions.ICON_ONLY,
          dotSize: DotSize.SMALL,
          tabBarBackground: isDarkMode ? '#1a2230' : '#ffffff',
          activeTabBackgrounds: '#518cff',
        }}
        initialRouteName={'Profile'}>
        <Tabs.Screen
          name="Diagnose"
          options={{
            tabBarIcon: () => (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={
                  isDarkMode
                    ? require('../../../assets/icons/diagnose-icon_dark.png')
                    : require('../../../assets/icons/diagnose-icon.png')
                }
                alt={'Diagnose'}
              />
            ),
          }}>
          {props => <HomeDiagnose {...props} isDarkMode={isDarkMode} />}
        </Tabs.Screen>
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarIcon: () => (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={
                  isDarkMode
                    ? require('../../../assets/icons/profile_dark.png')
                    : require('../../../assets/icons/profile.png')
                }
                alt={'Profile'}
              />
            ),
          }}>
          {props => <HomeProfile {...props} isDarkMode={isDarkMode} />}
        </Tabs.Screen>
        <Tabs.Screen
          name="Settings"
          options={{
            tabBarIcon: () => (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={
                  isDarkMode
                    ? require('../../../assets/icons/settings_dark.png')
                    : require('../../../assets/icons/settings.png')
                }
                alt={'Settings'}
              />
            ),
          }}>
          {props => (
            <HomeSettings
              {...props}
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          )}
        </Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigation;
