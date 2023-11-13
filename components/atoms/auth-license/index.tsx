import React from 'react';
import {inputText, StyledText17} from '../../../styles/input-text';
import {FormTextInput} from '../../../styles/input-forms';

// @ts-ignore
function AuthLicense({isDarkMode, license, setLicense}) {
  const inputStyle = inputText(isDarkMode);

  const handleLicenseChange = text => {
    setLicense(text);
  };

  return (
    <>
      <StyledText17 style={inputStyle.semibold}>Registration No.</StyledText17>
      <FormTextInput
        style={{backgroundColor: isDarkMode ? '#1a2230' : '#f8faff'}}
        value={license}
        onChangeText={handleLicenseChange}
        placeholder="useless placeholder"
        placeholderTextColor="#9fa4ac"
        keyboardType="numeric"
      />
    </>
  );
}

export default AuthLicense;
