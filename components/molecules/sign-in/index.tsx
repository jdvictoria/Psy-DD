import React, {useState} from 'react';

import {StyledCol} from '../../../styles/container';

import {
  contentText,
  inputText,
  StyledText12,
  StyledText16,
  StyledText17,
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
  // TODO: Connect Firebase
  const contentStyle = contentText(isDarkMode);
  const inputStyle = inputText(isDarkMode);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Regular expression for email validation
  const emailRegex = /\S+@\S+\.\S+/;

  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = text => {
    setEmail(text);
    setIsValidEmail(emailRegex.test(text));
  };

  // Regular expression for password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  const isLengthValid = password.length >= 8;
  const hasCapitalLetter = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  const [isValidPassword, setIsValidPassword] = useState(false);

  const handlePasswordChange = text => {
    setPassword(text);

    // Update validity based on separate conditions
    setIsValidPassword(
      isLengthValid &&
        hasCapitalLetter &&
        hasNumber &&
        passwordRegex.test(text),
    );
  };

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
        <StyledCol style={{width: '100%', paddingBottom: 20}}>
          <StyledText17
            style={[{position: 'absolute', left: 0}, inputStyle.semibold]}>
            Email
          </StyledText17>
          {!isValidEmail && email.length >= 1 && (
            <StyledText12
              style={[{position: 'absolute', right: 0}, inputStyle.regular]}>
              Input a Valid Email
            </StyledText12>
          )}
        </StyledCol>
        <FormTextInput
          style={{backgroundColor: isDarkMode ? '#1a2230' : '#f8faff'}}
          value={email}
          onChangeText={handleEmailChange}
          placeholder="useless placeholder"
          placeholderTextColor="#9fa4ac"
        />
        <StyledCol style={{width: '100%', paddingBottom: 20}}>
          <StyledText17
            style={[{position: 'absolute', left: 0}, inputStyle.semibold]}>
            Password
          </StyledText17>
          {hasCapitalLetter && hasNumber && !isLengthValid && (
            <StyledText12
              style={[{position: 'absolute', right: 0}, inputStyle.regular]}>
              Must be at least 8 characters
            </StyledText12>
          )}
          {isLengthValid && hasNumber && !hasCapitalLetter && (
            <StyledText12
              style={[{position: 'absolute', right: 0}, inputStyle.regular]}>
              Must have 1 Capital letter
            </StyledText12>
          )}
          {isLengthValid && hasCapitalLetter && !hasNumber && (
            <StyledText12
              style={[{position: 'absolute', right: 0}, inputStyle.regular]}>
              Must have 1 Number
            </StyledText12>
          )}
        </StyledCol>
        <FormTextInput
          style={{backgroundColor: isDarkMode ? '#1a2230' : '#f8faff'}}
          value={password.toLowerCase()}
          onChangeText={handlePasswordChange}
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
