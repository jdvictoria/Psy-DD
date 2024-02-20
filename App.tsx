import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UserAuth from './components/organism/1_user-auth';
import HomeNavigation from './components/organism/2_home';
import Loading from './components/organism/3_loading';

function App() {
  const Stack = createStackNavigator();

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [userID, setUserID] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" options={{headerShown: false}}>
          {props => (
            <UserAuth
              {...props}
              isDarkMode={isDarkMode}
              setUserID={setUserID}
              setIsDarkMode={setIsDarkMode}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Loading" options={{headerShown: false}}>
          {props => <Loading {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => (
            <HomeNavigation
              {...props}
              isDarkMode={isDarkMode}
              userID={userID}
              setIsDarkMode={setIsDarkMode}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
