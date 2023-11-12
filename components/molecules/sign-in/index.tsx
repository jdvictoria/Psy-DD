import React from 'react';

import {StyledCol} from '../../../styles/container';

import {
  contentText,
  inputText,
  StyledText16,
  StyledText20,
  StyledText30,
} from '../../../styles/text';

import {
  FormBox,
  FormInput,
  FormTextInput,
  FormButton,
} from '../../../styles/forms';

// @ts-ignore
function SignInComponent({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);
  const inputStyle = inputText(isDarkMode);

  return (
    <FormBox
      style={{
        backgroundColor: isDarkMode ? '#010919' : '#ffffff',
        borderColor: isDarkMode ? '#010919' : '#ffffff',
        marginTop: 25,
        marginBottom: 25,
      }}>
      <StyledCol style={{marginTop: 0}}>
        <StyledText30 style={inputStyle.semibold}>Sign In</StyledText30>
      </StyledCol>
      <FormInput style={{marginBottom: 17.5}}>
        <StyledText20 style={inputStyle.semibold}>Email</StyledText20>
        <FormTextInput
          style={{backgroundColor: isDarkMode ? '#1a2230' : '#f8faff'}}
          placeholder="useless placeholder"
          placeholderTextColor="#9fa4ac"
        />
        <StyledText20 style={inputStyle.semibold}>Password</StyledText20>
        <FormTextInput
          style={{backgroundColor: isDarkMode ? '#1a2230' : '#f8faff'}}
          placeholder="useless placeholder"
          placeholderTextColor="#9fa4ac"
        />
      </FormInput>
      <FormButton>
        <StyledText16 style={[contentStyle.semibold, {color: 'white'}]}>
          Sign In
        </StyledText16>
      </FormButton>
    </FormBox>
  );
}

export default SignInComponent;
