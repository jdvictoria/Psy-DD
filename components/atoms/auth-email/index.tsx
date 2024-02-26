import React, {useState} from 'react';

import {StyledCol} from '../../../styles/input-container';
import {
  errorText,
  inputText,
  StyledText12,
  StyledText17,
} from '../../../styles/input-text';
import {FormTextInput} from '../../../styles/input-forms';

function AuthEmail({isDarkMode, email, setEmail}: any) {
  const inputStyle = inputText(isDarkMode);
  const errorStyle = errorText();

  // Regular expression for email validation
  const emailRegex = /\S+@\S+\.\S+/;

  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsValidEmail(emailRegex.test(text));
  };

  return (
    <>
      <StyledCol style={{width: '100%', marginBottom: 12}}>
        <StyledText17
          style={[{position: 'absolute', left: 0}, inputStyle.semibold]}>
          Email
        </StyledText17>
        {!isValidEmail && email.length >= 1 && (
          <StyledText12
            style={[
              {position: 'absolute', right: 0, color: '#FF5656'},
              errorStyle.regular,
            ]}>
            Input a Valid Email
          </StyledText12>
        )}
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
        <FormTextInput
          style={{backgroundColor: isDarkMode ? '#1a2230' : '#EFEFEF'}}
          value={email}
          onChangeText={handleEmailChange}
          placeholder="juandelacruz@gmail.com"
          placeholderTextColor="#9fa4ac"
          autoCapitalize="none"
        />
      </StyledCol>
    </>
  );
}

export default AuthEmail;
