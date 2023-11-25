import React from 'react';

import {inputText, StyledText17} from '../../../styles/input-text';

import {FormTextInput} from '../../../styles/input-forms';

import {StyledCol} from '../../../styles/input-container';

// @ts-ignore
function AuthLicense({isDarkMode, license, setLicense}) {
  const inputStyle = inputText(isDarkMode);

  const handleLicenseChange = (text: any) => {
    setLicense(text);
  };

  return (
    <>
      <StyledCol style={{width: '100%', marginTop: 12, marginBottom: 12}}>
        <StyledText17
          style={[{position: 'absolute', left: 0}, inputStyle.semibold]}>
          License No.
        </StyledText17>
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
          style={{backgroundColor: isDarkMode ? '#1a2230' : '#EFEFEF'}}
          value={license}
          onChangeText={handleLicenseChange}
          placeholder="0000000"
          placeholderTextColor="#9fa4ac"
          keyboardType="numeric"
        />
      </StyledCol>
    </>
  );
}

export default AuthLicense;
