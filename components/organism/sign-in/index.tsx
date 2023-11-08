import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import styled from 'styled-components';
import {StyledCol, StyledRow, StyledSafeView} from '../../../styles/container';
import {
  contentText,
  inputText,
  StyledText16,
  StyledText20,
  StyledText34,
  StyledText40,
} from '../../../styles/text';

const FormBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 85%;
  height: 45%;

  border: 2px;
  border-radius: 30px;
`;

const FormButton = styled.TouchableOpacity`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;

  bottom: 0;
  height: 15%;
  width: 100%;

  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;

  background: #518bfe;
`;

const FormInput = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 87.5%;
`;

const FormTextInput = styled.TextInput`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 100%;

  margin-top: 10px;
  margin-bottom: 25px;
  padding-left: 25px;

  border-radius: 10px;

  font-size: 16px;
  color: #94a4ac;
  background-color: #1a2230;
`;

// @ts-ignore
function SignIn({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);
  const inputStyle = inputText(isDarkMode);

  return (
    <StyledSafeView>
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
      <FormBox
        style={{
          backgroundColor: isDarkMode ? '#010919' : '#ffffff',
          borderColor: isDarkMode ? '#010919' : '#ffffff',
          marginTop: 40,
          marginBottom: 30,
        }}>
        <StyledCol style={{marginBottom: 25}}>
          <StyledText34 style={inputStyle.semibold}>Sign Up</StyledText34>
        </StyledCol>
        <FormInput style={{marginBottom: 35}}>
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
    </StyledSafeView>
  );
}

export default SignIn;
