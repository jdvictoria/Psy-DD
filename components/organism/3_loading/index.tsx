import React from 'react';
import {Image} from 'react-native';

import * as Progress from 'react-native-progress';

function Loading() {
  return (
    <>
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
    </>
  );
}

export default Loading;
