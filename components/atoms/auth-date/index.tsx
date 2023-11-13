import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import {
  inputText,
  StyledText16,
  StyledText17,
} from '../../../styles/input-text';
import DatePicker from 'react-native-date-picker';

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
function AuthDate({isDarkMode, date, setDate}) {
  const inputStyle = inputText(isDarkMode);

  const [open, setOpen] = useState(false);

  const birthdayMinDate = new Date();
  const birthdayMaxData = new Date(birthdayMinDate);
  birthdayMaxData.setFullYear(birthdayMinDate.getFullYear() - 18);

  return (
    <>
      <StyledText17 style={inputStyle.semibold}>Date Of Birth</StyledText17>
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
    </>
  );
}

export default AuthDate;
