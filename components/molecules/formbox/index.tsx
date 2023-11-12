import React from 'react';
import styled from 'styled-components';

import {StyledCol} from '../../../styles/container';
import {
  contentText,
  inputText,
  StyledText16,
  StyledText20,
  StyledText30,
} from '../../../styles/text';

const FormBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 85%;
  height: 40%;

  border: 1px;
  border-radius: 25px;
`;

const FormButton = styled.TouchableOpacity`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;

  bottom: 0;
  height: 15%;
  width: 100%;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  background: #518bfe;
`;

const FormInput = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 70%;
  width: 87.5%;
`;

const FormTextInput = styled.TextInput`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 22.5%;
  width: 100%;

  margin-top: 7.5px;
  margin-bottom: 15px;
  padding-left: 25px;

  border-radius: 10px;

  font-size: 16px;
  color: #94a4ac;
  background-color: #1a2230;
`;

// @ts-ignore
function FormComponent({isDarkMode}) {
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

export default FormComponent;
