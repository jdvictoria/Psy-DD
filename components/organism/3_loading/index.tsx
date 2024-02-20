import React, {useEffect} from 'react';
import {Image} from 'react-native';

import * as Progress from 'react-native-progress';
import {StyledSafeView} from '../../../styles/input-container';

// @ts-ignore
function Loading({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);

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
