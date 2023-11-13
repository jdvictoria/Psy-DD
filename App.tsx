import React, {useState} from 'react';

import {StyledSafeView} from './styles/input-container';

import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions, // optional
} from 'react-native-animated-nav-tab-bar';

import UserAuth from './components/organism/1_user-auth';
import HomeProfile from './components/organism/2_home/b_profile';
import {NavigationContainer} from '@react-navigation/native';
import HomeDiagnose from './components/organism/2_home/a_diagnose';
import HomeSettings from './components/organism/2_home/c_settings';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const Tabs = AnimatedTabBarNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator
        // default configuration from React Navigation
        tabBarOptions={{
          activeTintColor: '#2F7C6E',
          inactiveTintColor: '#222222',
        }}>
        <Tabs.Screen name="HomeDiagnose" component={HomeDiagnose} />
        <Tabs.Screen name="HomeProfile" component={HomeProfile} />
        <Tabs.Screen name="HomeSettings" component={HomeSettings} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
