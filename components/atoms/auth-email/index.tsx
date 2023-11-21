import React, {useState} from 'react';

import {StyledCol} from '../../../styles/input-container';

import {
  inputText,
  StyledText12,
  StyledText17,
} from '../../../styles/input-text';

import {FormTextInput} from '../../../styles/input-forms';

// @ts-ignore
function AuthEmail({isDarkMode, email, setEmail}) {
  const inputStyle = inputText(isDarkMode);

  // Regular expression for email validation
  const emailRegex = /\S+@\S+\.\S+/;

  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = text => {
    setEmail(text);
    setIsValidEmail(emailRegex.test(text));
  };

  return (
    <>
      <StyledCol style={{width: '100%', paddingBottom: 20}}>
        <StyledText17
          style={[{position: 'absolute', left: 0}, inputStyle.semibold]}>
          Email
        </StyledText17>
        {!isValidEmail && email.length >= 1 && (
          <StyledText12
            style={[{position: 'absolute', right: 0}, inputStyle.regular]}>
            Input a Valid Email
          </StyledText12>
        )}
      </StyledCol>
      <FormTextInput
        style={{backgroundColor: isDarkMode ? '#1a2230' : '#f8faff'}}
        value={email}
        onChangeText={handleEmailChange}
        placeholder="useless placeholder"
        placeholderTextColor="#9fa4ac"
        autoCapitalize="none"
      />
    </>
  );
}

export default AuthEmail;
