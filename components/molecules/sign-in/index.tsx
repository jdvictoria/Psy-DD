import React, {useState} from 'react';

import {StyledCol} from '../../../styles/container';

import {
  contentText,
  inputText,
  StyledText16,
  StyledText30,
} from '../../../styles/text';

import {FormBox, FormInput, FormButton} from '../../../styles/forms';

import AuthEmail from '../../atoms/auth-email';
import AuthPassword from '../../atoms/auth-password';

// @ts-ignore
function SignInComponent({isDarkMode}) {
  // TODO: Connect Firebase
  const contentStyle = contentText(isDarkMode);
  const inputStyle = inputText(isDarkMode);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <AuthEmail isDarkMode={isDarkMode} email={email} setEmail={setEmail} />
        <AuthPassword
          isDarkMode={isDarkMode}
          password={password}
          setPassword={setPassword}
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
