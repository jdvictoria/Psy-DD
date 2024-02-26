import React from 'react';
import {Image} from 'react-native';

import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';

import HomeDiagnose from '../../molecules/diagnose';
import HomeProfile from '../../molecules/profile';
import HomeSettings from '../../molecules/settings';

// @ts-ignore
function HomeNavigation({
  navigation,
  isDarkMode,
  profileData,
  setIsDarkMode,
}: any) {
  const Tabs = AnimatedTabBarNavigator();

  return (
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
        {props => (
          <HomeProfile
            {...props}
            isDarkMode={isDarkMode}
            profile={profileData}
          />
        )}
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
        {() => (
          <HomeSettings
            navigation={navigation}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        )}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}

export default HomeNavigation;
