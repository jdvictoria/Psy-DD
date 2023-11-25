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
} from '../../../styles/input-container';

import {
  contentText,
  StyledText16,
  StyledText40,
} from '../../../styles/input-text';

import SignInComponent from '../../molecules/sign-in';
import SignUpComponent from '../../molecules/sign-up';

// @ts-ignore
function UserAuth({isDarkMode, setIsLoggedIn, setIsDarkMode, setOpenWeb}) {
  const contentStyle = contentText(isDarkMode);

  const [isSignIn, setIsSignIn] = useState(true);
  const [isKeyboardOn, setIsKeyboardOn] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOn(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOn(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const changeToSignUp = () => {
    setIsSignIn(false);
  };

  const changeToSignIn = () => {
    setIsSignIn(true);
  };

  const toggleSwitch = () =>
    setIsDarkMode((previousState: any) => !previousState);

  return (
    <StyledKeyboardView
      style={{
        marginBottom: isKeyboardOn ? (isSignIn ? 90 : 135) : 0,
        zIndex: 1,
      }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <TouchableOpacity
            onPress={toggleSwitch}
            style={{
              position: 'absolute',
              right: 30,
              top: 35,
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
              }}
              source={require('../../../assets/icons/darkmode-icon_dark.png')}
              alt={'Dark Mode'}
            />
          </TouchableOpacity>
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
          {isSignIn ? (
            <SignInComponent
              isDarkMode={isDarkMode}
              setIsLoggedIn={setIsLoggedIn}
            />
          ) : (
            <SignUpComponent isDarkMode={isDarkMode} setOpenWeb={setOpenWeb} />
          )}
          {isSignIn && (
            <StyledRow style={{marginBottom: 20}}>
              <TouchableOpacity>
                <StyledText16 style={[contentStyle.bold, {color: 'white'}]}>
                  Forgot Password?
                </StyledText16>
              </TouchableOpacity>
            </StyledRow>
          )}
          <StyledRow style={{marginTop: 30}}>
            <StyledText16 style={[contentStyle.medium, {color: 'white'}]}>
              {isSignIn
                ? "Don't have any Account?"
                : 'Already have an Account?'}
            </StyledText16>
            <TouchableOpacity
              onPress={isSignIn ? changeToSignUp : changeToSignIn}>
              <StyledText16 style={[contentStyle.semibold, {color: 'white'}]}>
                {' '}
                {isSignIn ? 'Sign Up' : 'Sign In'}
              </StyledText16>
            </TouchableOpacity>
          </StyledRow>
        </>
      </TouchableWithoutFeedback>
    </StyledKeyboardView>
  );
}

export default UserAuth;
