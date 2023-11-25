import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {firebase} from '@react-native-firebase/auth';

import {StyledCol, StyledRow} from '../../../styles/input-container';

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

// @ts-ignore
function SignUpComponent({isDarkMode}) {
  // TODO: Firebase Auth
  const contentStyle = contentText(isDarkMode);
  const inputStyle = inputText(isDarkMode);

  const [formStep, setFormStep] = useState(1);
  const [byLicense, setByLicense] = useState(true);

  const handleNextStep = () => {
    setFormStep(formStep + 1);
  };

  const handleChangeMode = () => {
    setByLicense(prevState => !prevState);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [license, setLicense] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSignUp = () => {
    // Date
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    // console.log(dateString);

    // TODO: Hook GovChecks Axios

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
    <>
      <FormBox
        style={{
          backgroundColor: isDarkMode ? '#010919' : '#ffffff',
          borderColor: isDarkMode ? '#010919' : '#ffffff',
          marginTop: 15,
          marginBottom: 15,
        }}>
        <StyledRow style={{width: '100%', marginBottom: 24}}>
          {formStep == 2 && (
            <>
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
              <TouchableOpacity
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
            </>
          )}
          <StyledText30 style={inputStyle.semibold}>Sign Up</StyledText30>
        </StyledRow>
        {formStep === 1 && (
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
            <FormButton onPress={handleNextStep}>
              <StyledText16 style={[contentStyle.semibold, {color: 'white'}]}>
                Next
              </StyledText16>
            </FormButton>
          </>
        )}
        {formStep === 2 && (
          <>
            <FormInput>
              <AuthDate isDarkMode={isDarkMode} date={date} setDate={setDate} />
              <AuthLicense
                isDarkMode={isDarkMode}
                license={license}
                setLicense={setLicense}
              />
            </FormInput>
            <FormButton onPress={handleSignUp}>
              <StyledText16 style={[contentStyle.semibold, {color: 'white'}]}>
                Submit
              </StyledText16>
            </FormButton>
          </>
        )}
      </FormBox>
    </>
  );
}

export default SignUpComponent;
