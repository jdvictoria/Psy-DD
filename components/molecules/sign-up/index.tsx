import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';

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

  const handleNextStep = () => {
    setFormStep(formStep + 1);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [license, setLicense] = useState('');
  const [date, setDate] = useState(new Date());

  return (
    <FormBox
      style={{
        backgroundColor: isDarkMode ? '#010919' : '#ffffff',
        borderColor: isDarkMode ? '#010919' : '#ffffff',
        marginTop: 25,
        marginBottom: 25,
      }}>
      {formStep === 1 && (
        <>
          <StyledCol style={{marginTop: 0}}>
            <StyledText30 style={inputStyle.semibold}>Sign Up</StyledText30>
          </StyledCol>
          <FormInput style={{marginBottom: 17.5}}>
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
          <StyledRow style={{marginTop: 0, width: '100%'}}>
            <TouchableOpacity
              style={{
                display: 'flex',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                left: 25,
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
            <StyledText30 style={inputStyle.semibold}>Sign Up</StyledText30>
          </StyledRow>
          <FormInput style={{marginBottom: 17.5}}>
            <AuthDate isDarkMode={isDarkMode} date={date} setDate={setDate} />
            <AuthLicense
              isDarkMode={isDarkMode}
              license={license}
              setLicense={setLicense}
            />
          </FormInput>
          <FormButton>
            <StyledText16 style={[contentStyle.semibold, {color: 'white'}]}>
              Submit
            </StyledText16>
          </FormButton>
        </>
      )}
    </FormBox>
  );
}

export default SignUpComponent;
