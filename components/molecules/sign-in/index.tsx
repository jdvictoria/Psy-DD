import React, {useCallback, useEffect, useState} from 'react';
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        if (firebase.auth().currentUser?.emailVerified) {
          setIsLoggedIn(true);
        } else {
          setError('Error: Email Unverified');
        }
      })
      .catch(error => {
        // Update the error state with the specific error message
        setError('Error: Invalid Email / Password');
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
    </>
  );
}

export default SignInComponent;
