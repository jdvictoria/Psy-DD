import React, {useEffect, useState} from 'react';
import {
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  StyledCol,
  StyledKeyboardView,
  StyledRow,
} from '../../../styles/container';
import {contentText, StyledText16, StyledText40} from '../../../styles/text';

import FormComponent from '../../molecules/formbox';

// @ts-ignore
function SignIn({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);

  const [isKeyboardOn, setIsKeyboardOn] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOn(true);
      console.log('keyboard is on');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOn(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <StyledKeyboardView style={{marginBottom: isKeyboardOn ? 90 : 0}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <StyledCol style={{flexDirection: isKeyboardOn ? 'row' : 'column'}}>
            <Image
              style={{
                width: isKeyboardOn ? 60 : 100,
                height: isKeyboardOn ? 60 : 100,
                resizeMode: 'contain',
              }}
              source={require('../../../assets/icons/home-icon.png')}
              alt={'HomeIcon'}
            />
            <StyledText40
              style={[
                contentStyle.bold,
                {color: 'white', fontSize: isKeyboardOn ? 35 : 40},
              ]}>
              Psy-DD
            </StyledText40>
          </StyledCol>
          <FormComponent isDarkMode={isDarkMode} />
          <StyledRow style={{marginBottom: 25}}>
            <TouchableOpacity>
              <StyledText16 style={[contentStyle.bold, {color: 'white'}]}>
                Forgot Password?
              </StyledText16>
            </TouchableOpacity>
          </StyledRow>
          <StyledRow style={{marginTop: 50}}>
            <StyledText16 style={[contentStyle.medium, {color: 'white'}]}>
              Don't have any Account?
            </StyledText16>
            <TouchableOpacity>
              <StyledText16 style={[contentStyle.semibold, {color: 'white'}]}>
                {' '}
                Sign Up
              </StyledText16>
            </TouchableOpacity>
          </StyledRow>
        </>
      </TouchableWithoutFeedback>
    </StyledKeyboardView>
  );
}

export default SignIn;
