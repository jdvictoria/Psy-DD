import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {
  errorText,
  inputText,
  StyledText12,
  StyledText17,
} from '../../../styles/input-text';

import {FormTextInput} from '../../../styles/input-forms';

import {StyledCol} from '../../../styles/input-container';

// @ts-ignore
function AuthPassword({isDarkMode, password, setPassword}) {
  const inputStyle = inputText(isDarkMode);
  const errorStyle = errorText();

  // Regular expression for password validation
  const isLengthValid = password.length >= 8;
  const hasCapitalLetter = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const [isMasked, setIsMasked] = useState(true);

  const handleShowHide = () => {
    setIsMasked(prevState => !prevState);
  };

  return (
    <>
      <StyledCol style={{width: '100%', marginTop: 12, marginBottom: 12}}>
        <StyledText17
          style={[{position: 'absolute', left: 0}, inputStyle.semibold]}>
          Password
        </StyledText17>
        {hasCapitalLetter && hasNumber && !isLengthValid && (
          <StyledText12
            style={[
              {position: 'absolute', right: 0, color: '#FF5656'},
              errorStyle.regular,
            ]}>
            Must be at least 8 characters
          </StyledText12>
        )}
        {isLengthValid && hasNumber && !hasCapitalLetter && (
          <StyledText12
            style={[
              {position: 'absolute', right: 0, color: '#FF5656'},
              errorStyle.regular,
            ]}>
            Must have 1 Capital letter
          </StyledText12>
        )}
        {isLengthValid && hasCapitalLetter && !hasNumber && (
          <StyledText12
            style={[
              {position: 'absolute', right: 0, color: '#FF5656'},
              errorStyle.regular,
            ]}>
            Must have 1 Number
          </StyledText12>
        )}
      </StyledCol>
      <StyledCol
        style={{
          marginTop: 6,
          width: '100%',
          height: '25%',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <FormTextInput
          style={{
            backgroundColor: isDarkMode ? '#1a2230' : '#EFEFEF',
          }}
          secureTextEntry={isMasked}
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="•••••••••••"
          placeholderTextColor="#9fa4ac"
          autoCapitalize="none"
        />
        <TouchableOpacity
          onPress={handleShowHide}
          style={{position: 'absolute', right: 15}}>
          <Image
            style={{
              resizeMode: 'contain',
              width: 25,
              height: 25,
            }}
            source={
              isDarkMode
                ? isMasked
                  ? require('../../../assets/icons/show-icon_dark.png')
                  : require('../../../assets/icons/hide-icon_dark.png')
                : isMasked
                ? require('../../../assets/icons/show-icon.png')
                : require('../../../assets/icons/hide-icon.png')
            }
            alt={'ShowHide'}
          />
        </TouchableOpacity>
      </StyledCol>
    </>
  );
}

export default AuthPassword;
