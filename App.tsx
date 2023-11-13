import React, {useState} from 'react';

import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import HomeProfile from './components/organism/2_home/b_profile';
import {NavigationContainer} from '@react-navigation/native';
import HomeDiagnose from './components/organism/2_home/a_diagnose';
import HomeSettings from './components/organism/2_home/c_settings';
import {Image} from 'react-native';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
          dotCornerRadius: 30,
          tabBarBackground: isDarkMode ? '#1a2230' : '#ffffff',
          activeTabBackgrounds: '#518cff',
        }}>
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
                    ? require('./assets/icons/diagnose-icon_dark.png')
                    : require('./assets/icons/diagnose-icon.png')
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
                    ? require('./assets/icons/profile_dark.png')
                    : require('./assets/icons/profile.png')
                }
                alt={'Diagnose'}
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
                    ? require('./assets/icons/settings_dark.png')
                    : require('./assets/icons/settings.png')
                }
                alt={'Diagnose'}
              />
            ),
          }}>
          {props => <HomeSettings {...props} isDarkMode={isDarkMode} />}
        </Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
