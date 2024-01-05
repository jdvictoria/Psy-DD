import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, Image, TouchableOpacity} from 'react-native';

import * as Progress from 'react-native-progress';
import {WebView, WebViewMessageEvent} from 'react-native-webview';

import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {StyledRow} from '../../../styles/input-container';
import {
  contentText,
  inputText,
  StyledText16,
  StyledText30,
} from '../../../styles/input-text';

import {FormBox, FormInput, FormButton} from '../../../styles/input-forms';

import AuthEmail from '../../atoms/auth-email';
import AuthPassword from '../../atoms/auth-password';
import AuthDate from '../../atoms/auth-date';
import AuthLicense from '../../atoms/auth-license';
import AuthFirstName from '../../atoms/auth-fname';
import AuthLastName from '../../atoms/auth-lname';

// @ts-ignore
function SignUpComponent({isDarkMode, setIsSignIn}) {
  const alertEmailVerification = () =>
    Alert.alert(
      'Email Verification Sent',
      'Check your email and verify your account.',
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('OK Pressed');
            setIsSignIn(true);
          },
        },
      ],
    );

  const contentStyle = contentText(isDarkMode);
  const inputStyle = inputText(isDarkMode);

  const [byLicense, setByLicense] = useState(false);
  const [formStep, setFormStep] = useState(0);

  const [verifyError, setVerifyError] = useState(null);
  const [signUpError, setSignUpError] = useState(null);

  const clearVerifyError = useCallback(() => {
    setVerifyError(null);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(clearVerifyError, 3000);
    return () => clearTimeout(timeoutId);
  }, [verifyError, clearVerifyError]);

  const clearSignUpError = useCallback(() => {
    setSignUpError(null);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(clearSignUpError, 3000);
    return () => clearTimeout(timeoutId);
  }, [signUpError, clearSignUpError]);

  const handleNextStep = () => {
    setFormStep(formStep + 1);
  };

  const [verifyClick, setVerifyClick] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (verifyClick && !isValid) {
      timeoutId = setTimeout(() => {
        setVerifyError('Error: PRC Authentication Failed');
        setVerifyClick(false);
        setOpenWeb(false);
      }, 5000);
    } else {
      clearTimeout(timeoutId);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [verifyClick, isValid]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState('');
  const [license, setLicense] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSignUp = async () => {
    try {
      // Create user using Firebase Authentication
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      // Send email verification
      await userCredential.user?.sendEmailVerification();
      alertEmailVerification();

      console.log(firebase.auth().currentUser?.uid);
      // Add user data to Firestore
      await firestore()
        .collection('Users')
        .doc(firebase.auth().currentUser?.uid)
        .set({
          FirstName: firstName,
          LastName: lastName,
          Birthday: dateString,
          License: license,
        });

      console.log('User added!');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setSignUpError('Error: Email Already In Use');
      } else if (error.code === 'auth/invalid-email') {
        setSignUpError('Error: Invalid Email');
      } else {
        console.error('Error creating user:', error);
      }
    }
  };

  // Web View
  const webViewRef = useRef(null);
  const [openWeb, setOpenWeb] = useState(false);

  const handleVerify = () => {
    setVerifyClick(true);
    setOpenWeb(true);
  };

  const handleWebViewLoad = () => {
    if (webViewRef.current) {
      const injectScript = byLicense
        ? `
        document.querySelector('a[href="#messages"]').click();

        setTimeout(() => {
          const selectElement = document.querySelector('.form-control.ddselect.profs.select2-hidden-accessible#verLProf');
          if (selectElement) {
            // Simulate selecting the option with value "57"
            const optionToSelect = selectElement.querySelector('option[value="57"][data-select2-id="214"]');
            if (optionToSelect) {
            if (optionToSelect) {
              optionToSelect.selected = true;
              selectElement.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }
          
          var licenseInput = document.getElementById('verLLicense');
          licenseInput.value = '${license}';
          
          var dateInput = document.getElementById('verLBdate');
          dateInput.value = '${dateString}';
          
          setTimeout(() => {
            var verifyButton = document.getElementById('verifyNAbtn');
            if (verifyButton) {
              verifyButton.click();
            }
          }, 500);
        }, 500);
        
        const targetDiv = document.getElementById('myModalVerify');
        const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'style' && targetDiv.style.display === 'block') {
              window.ReactNativeWebView.postMessage('myModalVerifyDisplayChanged');
            }
          });
        });
        observer.observe(targetDiv, { attributes: true });
  `
        : `
        document.querySelector('a[href="#profile"]').click();
    
        setTimeout(() => {
          const selectElement = document.querySelector('.form-control.ddselect.profs.select2-hidden-accessible#verNaProf');
          if (selectElement) {
          // Simulate selecting the option with value "57"
            const optionToSelect = selectElement.querySelector('option[value="57"][data-select2-id="140"]');
            if (optionToSelect) {
              optionToSelect.selected = true;
              selectElement.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }
      
        var fnameInput = document.getElementById('verNaFname');
        fnameInput.value = '${firstName}';
      
        var lnameInput = document.getElementById('verNaLname');
        lnameInput.value = '${lastName}';
      
          setTimeout(() => {
            var verifyButton = document.getElementById('verifyNAbtn');
            if (verifyButton) {
              verifyButton.click();
            }
          }, 500);
        }, 500);

        const targetDiv = document.getElementById('myModalVerify');
        const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'style' && targetDiv.style.display === 'block') {
              window.ReactNativeWebView.postMessage('myModalVerifyDisplayChanged');
            }
          });
        });
        observer.observe(targetDiv, { attributes: true });
  `;

      webViewRef.current.injectJavaScript(injectScript);
    }
  };

  const handleWebViewMessage = (event: WebViewMessageEvent) => {
    if (event.nativeEvent.data === 'myModalVerifyDisplayChanged') {
      setIsValid(true);
      setVerifyClick(false);
      setOpenWeb(false);
    }
  };

  return (
    <>
      <FormBox
        style={{
          backgroundColor: isDarkMode ? '#010919' : '#ffffff',
          borderColor: isDarkMode ? '#010919' : '#ffffff',
          marginTop: 15,
          marginBottom: 15,
        }}>
        <StyledRow style={{width: '100%', marginBottom: 24}}>
          {(formStep === 1 || formStep === 2) && (
            <TouchableOpacity
              style={{
                display: 'flex',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                left: 20,
              }}
              onPress={() => setFormStep(formStep - 1)}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
                source={
                  isDarkMode
                    ? require('../../../assets/icons/back-button_dark.png')
                    : require('../../../assets/icons/back-button.png')
                }
                alt={'Calendar'}
              />
            </TouchableOpacity>
          )}
          <StyledText30 style={inputStyle.semibold}>Sign Up</StyledText30>
        </StyledRow>
        {formStep === 0 && (
          <>
            <FormInput>
              <AuthFirstName
                isDarkMode={isDarkMode}
                name={firstName}
                setName={setFirstName}
              />
              <AuthLastName
                isDarkMode={isDarkMode}
                name={lastName}
                setName={setLastName}
              />
            </FormInput>
            <FormButton onPress={handleNextStep}>
              <StyledText16
                style={[
                  contentStyle.semibold,
                  {color: 'white', paddingTop: 0},
                ]}>
                Next
              </StyledText16>
            </FormButton>
          </>
        )}
        {formStep === 1 && (
          <>
            <FormInput>
              <AuthDate
                isDarkMode={isDarkMode}
                date={date}
                setDate={setDate}
                dateString={dateString}
                setDateString={setDateString}
              />
              <AuthLicense
                isDarkMode={isDarkMode}
                license={license}
                setLicense={setLicense}
              />
            </FormInput>
            <FormButton onPress={!isValid ? handleVerify : handleNextStep}>
              {(!verifyClick || isValid) && (
                <StyledText16
                  style={[
                    contentStyle.semibold,
                    {color: 'white', paddingTop: openWeb ? 12.5 : 0},
                  ]}>
                  {!isValid ? 'Verify' : 'Next'}
                </StyledText16>
              )}
              {verifyClick && (
                <Progress.Circle
                  style={{paddingTop: openWeb ? 12.5 : 0}}
                  size={20}
                  indeterminate={true}
                  indeterminateAnimationDuration={1750}
                  color={'white'}
                  borderWidth={2.5}
                />
              )}
              {openWeb && (
                <WebView
                  ref={webViewRef}
                  source={{uri: 'https://online.prc.gov.ph/Verification'}}
                  onLoad={handleWebViewLoad}
                  onMessage={handleWebViewMessage}
                />
              )}
            </FormButton>
          </>
        )}
        {formStep === 2 && (
          <>
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
            <FormButton onPress={handleSignUp}>
              <StyledText16 style={[contentStyle.semibold, {color: 'white'}]}>
                Sign Up
              </StyledText16>
            </FormButton>
          </>
        )}
      </FormBox>
      {verifyError && (
        <StyledRow style={{marginBottom: 10}}>
          <StyledText16 style={[contentStyle.semibold, {color: 'red'}]}>
            {verifyError}
          </StyledText16>
        </StyledRow>
      )}
      {signUpError && (
        <StyledRow style={{marginBottom: 10}}>
          <StyledText16 style={[contentStyle.semibold, {color: 'red'}]}>
            {signUpError}
          </StyledText16>
        </StyledRow>
      )}
    </>
  );
}

export default SignUpComponent;
