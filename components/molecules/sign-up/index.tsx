import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import * as Progress from 'react-native-progress';
import {firebase} from '@react-native-firebase/auth';
import {WebView, WebViewMessageEvent} from 'react-native-webview';

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
function SignUpComponent({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);
  const inputStyle = inputText(isDarkMode);

  const [byLicense, setByLicense] = useState(true);
  const [formStep, setFormStep] = useState(1);

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

  const handleChangeMode = () => {
    setByLicense((prevState: any) => !prevState);
  };

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

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        // Update the error state with the specific error message
        setSignUpError('Error: Invalid Email / Password');
      });
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
      console.log('true');
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
          {formStep === 1 && (
            <TouchableOpacity
              disabled={isValid}
              style={{
                display: 'flex',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                right: 20,
              }}
              onPress={handleChangeMode}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
                source={
                  byLicense
                    ? isDarkMode
                      ? require('../../../assets/icons/byname-icon_dark.png')
                      : require('../../../assets/icons/byname-icon.png')
                    : isDarkMode
                    ? require('../../../assets/icons/bylicense-icon_dark.png')
                    : require('../../../assets/icons/bylicense-icon.png')
                }
                alt={'Calendar'}
              />
            </TouchableOpacity>
          )}
          {formStep === 2 && (
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
        {formStep === 1 && (
          <>
            <FormInput>
              {byLicense ? (
                <>
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
                </>
              ) : (
                <>
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
                </>
              )}
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
            <FormButton>
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
