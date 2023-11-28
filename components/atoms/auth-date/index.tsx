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

  height: 60px;
  width: 100%;

  border-radius: 10px;
`;

// @ts-ignore
function AuthDate({isDarkMode, date, setDate, dateString, setDateString}) {
  const inputStyle = inputText(isDarkMode);

  const [open, setOpen] = useState(false);

  const birthdayMinDate = new Date();
  const birthdayMaxData = new Date(birthdayMinDate);
  birthdayMaxData.setFullYear(birthdayMinDate.getFullYear() - 18);

  return (
    <>
      <StyledCol style={{width: '100%', marginBottom: 12}}>
        <StyledText17
          style={[{position: 'absolute', left: 0}, inputStyle.semibold]}>
          Date Of Birth
        </StyledText17>
      </StyledCol>
      <StyledCol
        style={{
          marginTop: 6,
          width: '100%',
          height: '25%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 12,
        }}>
        <DatePlaceholder
          style={{backgroundColor: isDarkMode ? '#1a2230' : '#EFEFEF'}}>
          <StyledText16
            style={{
              color: '#94a4ac',
              display: 'flex',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              left: 25,
            }}>
            {dateString === '' ? 'MM/DD/YYYY' : dateString}
          </StyledText16>
          <TouchableOpacity
            style={{
              display: 'flex',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              right: 15,
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
          const year = new Date(date).getFullYear();
          const month = new Date(date).getMonth() + 1;
          const day = new Date(date).getDate();
          const formattedMonth = month.toString().padStart(2, '0');
          const formattedDay = day.toString().padStart(2, '0');
          const finalDate = `${formattedMonth}/${formattedDay}/${year}`;
          setDateString(finalDate);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        theme={isDarkMode ? 'dark' : 'light'}
      />
    </>
  );
}

export default AuthDate;
