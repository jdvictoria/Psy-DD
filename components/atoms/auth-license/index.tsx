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
      <StyledCol style={{width: '100%', marginTop: 6, paddingBottom: 6}}>
        <StyledText17 style={inputStyle.semibold}>
          Registration No.
        </StyledText17>
      </StyledCol>
      <StyledCol
        style={{
          width: '100%',
          height: '25%',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <FormTextInput
          style={{backgroundColor: isDarkMode ? '#1a2230' : '#f8faff'}}
          value={license}
          onChangeText={handleLicenseChange}
          placeholder="useless placeholder"
          placeholderTextColor="#9fa4ac"
          keyboardType="numeric"
        />
      </StyledCol>
    </>
  );
}

export default AuthLicense;
