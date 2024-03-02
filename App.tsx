import React, {useState} from 'react';

import {useNetInfo} from '@react-native-community/netinfo';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UserAuth from './components/organism/1_user-auth';
import HomeNavigation from './components/organism/2_home';
import Loading from './components/organism/3_loading';

function App() {
  const netInfo = useNetInfo();

  const Stack = createStackNavigator();

  const [isDarkMode, setIsDarkMode] = useState(true);

  const [userID, setUserID] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState({});

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
        }}>
        <Stack.Screen name="Loading" options={{headerShown: false}}>
          {props => (
            <Loading
              {...props}
              setUserID={setUserID}
              setIsLoggedIn={setIsLoggedIn}
              setProfileData={setProfileData}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Auth" options={{headerShown: false}}>
          {props => (
            <UserAuth
              {...props}
              isDarkMode={isDarkMode}
              netInfo={netInfo}
              setUserID={setUserID}
              setIsLoggedIn={setIsLoggedIn}
              setProfileData={setProfileData}
              setIsDarkMode={setIsDarkMode}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => (
            <HomeNavigation
              {...props}
              isDarkMode={isDarkMode}
              profileData={profileData}
              setIsDarkMode={setIsDarkMode}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
