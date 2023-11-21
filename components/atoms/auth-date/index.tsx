import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';

// @ts-ignore
import styled from 'styled-components';

import {
  inputText,
  StyledText16,
  StyledText17,
} from '../../../styles/input-text';

import {StyledCol} from '../../../styles/input-container';

import DatePicker from 'react-native-date-picker';

const DatePlaceholder = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  height: 100%;
  width: 100%;

  border-radius: 10px;
`;

// @ts-ignore
function AuthDate({isDarkMode, date, setDate}) {
  const inputStyle = inputText(isDarkMode);

  const [open, setOpen] = useState(false);

  const birthdayMinDate = new Date();
  const birthdayMaxData = new Date(birthdayMinDate);
  birthdayMaxData.setFullYear(birthdayMinDate.getFullYear() - 18);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const dateString = `${year}-${month}-${day}`;

  return (
    <>
      <StyledCol style={{width: '100%', marginTop: 2.5, paddingBottom: 1.5}}>
        <StyledText17 style={inputStyle.semibold}>Date Of Birth</StyledText17>
      </StyledCol>
      <StyledCol
        style={{
          width: '100%',
          height: '25%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 6,
        }}>
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
            {dateString}
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
      </StyledCol>

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
