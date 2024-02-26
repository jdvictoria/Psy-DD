import React, {useCallback, useEffect, useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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

import AsyncStorage from '@react-native-async-storage/async-storage';

function SignInComponent({
  navigation,
  isDarkMode,
  setUserID,
  setIsLoggedIn,
  setProfileData,
}: any) {
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

  const [email, setEmail] = useState('vjoshuaarlo12@gmail.com');
  const [password, setPassword] = useState('psyApp12');
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    await auth().currentUser?.reload();
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        if (auth().currentUser?.emailVerified) {
          const userDocument = await firestore()
            .collection('Users')
            .doc(auth().currentUser?.uid)
            .get();

          if (userDocument.exists) {
            const userData = userDocument.data();

            setUserID(auth().currentUser?.uid);
            setIsLoggedIn(true);
            setProfileData(userData);

            await AsyncStorage.setItem(
              'uid',
              auth().currentUser?.uid as string,
            );
            await AsyncStorage.setItem('auth', JSON.stringify(true));
            await AsyncStorage.setItem('data', JSON.stringify(userData));

            // @ts-ignore
            navigation.navigate('Home');
          } else {
            console.log('Document does not exist');
          }
        } else {
          await auth().currentUser?.sendEmailVerification();
          alertEmailVerification();
        }
      })
      .catch(() => {
        // @ts-ignore
        setError('Error: Email Does Not Exist.');
      });
  };

  const handleForgotPass = async () => {
    await auth().currentUser?.reload();
    await auth()
      .sendPasswordResetEmail(email)
      .then(async () => {
        alertPasswordReset();
      })
      .catch(() => {
        // @ts-ignore
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
