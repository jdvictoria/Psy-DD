import React from 'react';
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

  return (
    <StyledKeyboardView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <StyledCol>
            <Image
              style={{width: 100, height: 100}}
              source={require('../../../assets/icons/home-icon.png')}
              alt={'HomeIcon'}
            />
            <StyledText40 style={[contentStyle.bold, {color: 'white'}]}>
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
