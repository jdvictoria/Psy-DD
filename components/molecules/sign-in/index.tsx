import React, {useState} from 'react';
import {firebase} from '@react-native-firebase/auth';

import {StyledCol} from '../../../styles/input-container';

import {
  contentText,
  inputText,
  StyledText16,
  StyledText30,
} from '../../../styles/input-text';

import {FormBox, FormInput, FormButton} from '../../../styles/input-forms';

import AuthEmail from '../../atoms/auth-email';
import AuthPassword from '../../atoms/auth-password';

// @ts-ignore
function SignInComponent({isDarkMode}) {
  // TODO: Connect Firebase
  const contentStyle = contentText(isDarkMode);
  const inputStyle = inputText(isDarkMode);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        } else {
          console.error(error);
        }
      });
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
        <AuthEmail isDarkMode={isDarkMode} email={email} setEmail={setEmail} />
        <AuthPassword
          isDarkMode={isDarkMode}
          password={password}
          setPassword={setPassword}
        />
      </FormInput>
      <FormButton onPress={handleSignIn}>
        <StyledText16 style={[contentStyle.semibold, {color: 'white'}]}>
          Sign In
        </StyledText16>
      </FormButton>
    </FormBox>
  );
}

export default SignInComponent;
