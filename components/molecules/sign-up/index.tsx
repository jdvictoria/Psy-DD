import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import DatePicker from 'react-native-date-picker';

import {StyledCol, StyledRow} from '../../../styles/container';

import {
  contentText,
  inputText,
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
import styled from 'styled-components';

const DatePlaceholder = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  height: 22.5%;
  width: 100%;

  margin-top: 7.5px;
  margin-bottom: 15px;
  padding-left: 25px;

  border-radius: 10px;
`;

// @ts-ignore
function SignUpComponent({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);
  const inputStyle = inputText(isDarkMode);

  const [formStep, setFormStep] = useState(1);

  const handleNextStep = () => {
    setFormStep(formStep + 1);
  };

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const birthdayMinDate = new Date();
  const birthdayMaxData = new Date(birthdayMinDate);
  birthdayMaxData.setFullYear(birthdayMinDate.getFullYear() - 18);

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
            <StyledText17 style={inputStyle.semibold}>Email</StyledText17>
            <FormTextInput
              style={{backgroundColor: isDarkMode ? '#1a2230' : '#f8faff'}}
              placeholder="useless placeholder"
              placeholderTextColor="#9fa4ac"
            />
            <StyledText17 style={inputStyle.semibold}>Password</StyledText17>
            <FormTextInput
              style={{backgroundColor: isDarkMode ? '#1a2230' : '#f8faff'}}
              placeholder="useless placeholder"
              placeholderTextColor="#9fa4ac"
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
            <StyledText17 style={inputStyle.semibold}>
              Date Of Birth
            </StyledText17>
            <DatePlaceholder
              style={{backgroundColor: isDarkMode ? '#1a2230' : '#f8faff'}}>
              <StyledText16
                style={{
                  color: '#94a4ac',
                  display: 'flex',
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  left: 25,
                }}>
                useless placeholder
              </StyledText16>
              <TouchableOpacity
                style={{
                  display: 'flex',
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  right: 25,
                }}
                onPress={() => setOpen(true)}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                  }}
                  source={
                    isDarkMode
                      ? require('../../../assets/icons/calendar-button_dark.png')
                      : require('../../../assets/icons/calendar-button.png')
                  }
                  alt={'Calendar'}
                />
              </TouchableOpacity>
            </DatePlaceholder>
            <StyledText17 style={inputStyle.semibold}>
              Registration No.
            </StyledText17>
            <FormTextInput
              style={{backgroundColor: isDarkMode ? '#1a2230' : '#f8faff'}}
              placeholder="useless placeholder"
              placeholderTextColor="#9fa4ac"
            />
          </FormInput>
          <DatePicker
            modal
            mode={'date'}
            maximumDate={birthdayMaxData}
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
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
