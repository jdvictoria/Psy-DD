import React, {useEffect} from 'react';
import {Image} from 'react-native';

import * as Progress from 'react-native-progress';
import {StyledSafeView} from '../../../styles/input-container';

import AsyncStorage from '@react-native-async-storage/async-storage';

// @ts-ignore
function Loading({navigation, setUserID, setIsLoggedIn, setProfileData}) {
  const getData = async () => {
    try {
      const uid = await AsyncStorage.getItem('uid');
      const auth = JSON.parse((await AsyncStorage.getItem('auth')) as string);
      const data = JSON.parse((await AsyncStorage.getItem('data')) as string);

      console.log(uid);
      console.log(auth);
      console.log(data);

      if (uid !== null && auth !== null && data !== null) {
        setUserID(uid);
        setIsLoggedIn(auth);
        setProfileData(data);
        navigation.navigate('Home');
      } else {
        navigation.navigate('Auth');
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getData();
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <StyledSafeView>
      <Image
        style={{
          width: 250,
          height: 250,
          resizeMode: 'contain',
          marginBottom: 40,
        }}
        source={require('../../../assets/icons/home-icon.png')}
        alt={'HomeIcon'}
      />
      <Progress.Circle
        size={40}
        indeterminate={true}
        indeterminateAnimationDuration={1750}
        color={'white'}
        borderWidth={5}
      />
    </StyledSafeView>
  );
}

export default Loading;
