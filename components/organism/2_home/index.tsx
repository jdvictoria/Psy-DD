import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';

import HomeDiagnose from '../../molecules/diagnose';
import HomeProfile from '../../molecules/profile';
import HomeSettings from '../../molecules/settings';

// @ts-ignore
function HomeNavigation({navigation, isDarkMode, userID, setIsDarkMode}) {
  const Tabs = AnimatedTabBarNavigator();

  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userDoc = await firestore().collection('Users').doc(userID).get();
        if (userDoc.exists) {
          setProfileData(userDoc.data());
        } else {
          console.log('User document not found.');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [userID]);

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
        {props => (
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
