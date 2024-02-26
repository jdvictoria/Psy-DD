import React from 'react';

import {StyledCol} from '../../../styles/input-container';
import {inputText, StyledText17} from '../../../styles/input-text';
import {FormTextInput} from '../../../styles/input-forms';

function AuthLastName({isDarkMode, name, setName}: any) {
  const inputStyle = inputText(isDarkMode);

  const handleNameChange = (text: string) => {
    setName(text);
  };

  return (
    <>
      <StyledCol style={{width: '100%', marginTop: 12, marginBottom: 12}}>
        <StyledText17
          style={[{position: 'absolute', left: 0}, inputStyle.semibold]}>
          Last Name
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
        <FormTextInput
          style={{backgroundColor: isDarkMode ? '#1a2230' : '#EFEFEF'}}
          value={name.toUpperCase()}
          onChangeText={handleNameChange}
          placeholder="Dela Cruz"
          placeholderTextColor="#9fa4ac"
        />
      </StyledCol>
    </>
  );
}

export default AuthLastName;
