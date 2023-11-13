import React from 'react';

import {StyledSafeView} from '../../../../styles/form-container';

// @ts-ignore
function HomeProfile({isDarkMode}) {
  return (
    <StyledSafeView
      style={{backgroundColor: isDarkMode ? '#010919' : '#F8FAFF'}}>
      <></>
    </StyledSafeView>
  );
}

export default HomeProfile;
