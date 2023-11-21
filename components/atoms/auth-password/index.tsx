import React, {useState} from 'react';
import {StyledCol} from '../../../styles/input-container';
import {
  inputText,
  StyledText12,
  StyledText17,
} from '../../../styles/input-text';
import {FormTextInput} from '../../../styles/input-forms';

// @ts-ignore
function AuthPassword({isDarkMode, password, setPassword}) {
  const inputStyle = inputText(isDarkMode);

  // Regular expression for password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  const isLengthValid = password.length >= 8;
  const hasCapitalLetter = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  const [isValidPassword, setIsValidPassword] = useState(false);

  const handlePasswordChange = text => {
    setPassword(text);

    // Update validity based on separate conditions
    setIsValidPassword(
      isLengthValid &&
        hasCapitalLetter &&
        hasNumber &&
        passwordRegex.test(text),
    );
  };

  return (
    <>
      <StyledCol style={{width: '100%', paddingBottom: 20}}>
        <StyledText17
          style={[{position: 'absolute', left: 0}, inputStyle.semibold]}>
          Password
        </StyledText17>
        {hasCapitalLetter && hasNumber && !isLengthValid && (
          <StyledText12
            style={[{position: 'absolute', right: 0}, inputStyle.regular]}>
            Must be at least 8 characters
          </StyledText12>
        )}
        {isLengthValid && hasNumber && !hasCapitalLetter && (
          <StyledText12
            style={[{position: 'absolute', right: 0}, inputStyle.regular]}>
            Must have 1 Capital letter
          </StyledText12>
        )}
        {isLengthValid && hasCapitalLetter && !hasNumber && (
          <StyledText12
            style={[{position: 'absolute', right: 0}, inputStyle.regular]}>
            Must have 1 Number
          </StyledText12>
        )}
      </StyledCol>
      <FormTextInput
        style={{backgroundColor: isDarkMode ? '#1a2230' : '#f8faff'}}
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="useless placeholder"
        placeholderTextColor="#9fa4ac"
        autoCapitalize="none"
      />
    </>
  );
}

export default AuthPassword;
