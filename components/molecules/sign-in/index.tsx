import React, {useCallback, useEffect, useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {firebase} from '@react-native-firebase/auth';

import {StyledRow, StyledCol} from '../../../styles/input-container';

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
function SignInComponent({isDarkMode, setIsLoggedIn}) {
  const contentStyle = contentText(isDarkMode);
  const inputStyle = inputText(isDarkMode);

  const alertEmailVerification = () =>
    Alert.alert(
      'Unverified Email',
      'Check your email to verify your account.',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    );

  const alertPasswordReset = () =>
    Alert.alert(
      'Password Reset Link',
      'Check your email and reset your password.',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    await firebase.auth().currentUser?.reload();
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        if (firebase.auth().currentUser?.emailVerified) {
          setIsLoggedIn(true);
        } else {
          await firebase.auth().currentUser?.sendEmailVerification();
          alertEmailVerification();
        }
      })
      .catch(error => {
        setError('Error: Email Does Not Exist.');
      });
  };

  const handleForgotPass = async () => {
    await firebase.auth().currentUser?.reload();
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(async () => {
        alertPasswordReset();
      })
      .catch(error => {
        setError('Error: Unverified / Invalid Email.');
      });
  };

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(clearError, 3000);
    return () => clearTimeout(timeoutId);
  }, [error, clearError]);

  return (
    <>
      <FormBox
        style={{
          backgroundColor: isDarkMode ? '#010919' : '#ffffff',
          borderColor: isDarkMode ? '#010919' : '#ffffff',
          marginTop: 15,
          marginBottom: 15,
        }}>
        <StyledCol style={{marginBottom: 24}}>
          <StyledText30 style={inputStyle.semibold}>Sign In</StyledText30>
        </StyledCol>
        <FormInput>
          <AuthEmail
            isDarkMode={isDarkMode}
            email={email}
            setEmail={setEmail}
          />
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
      {error && (
        <StyledRow style={{marginBottom: 10}}>
          <StyledText16 style={[contentStyle.semibold, {color: 'red'}]}>
            {error}
          </StyledText16>
        </StyledRow>
      )}
      <StyledRow style={{marginBottom: 20}}>
        <TouchableOpacity onPress={handleForgotPass}>
          <StyledText16 style={[contentStyle.semibold, {color: 'white'}]}>
            Forgot Password?
          </StyledText16>
        </TouchableOpacity>
      </StyledRow>
    </>
  );
}

export default SignInComponent;
