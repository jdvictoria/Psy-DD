import React from 'react';
import {Image} from 'react-native';

import {
  contentText,
  StyledText16,
  StyledText20,
  subcontentText,
} from '../../../styles/form-text';

import {ProfileInfoCard} from '../../../styles/form-container';

// @ts-ignore
function CardProfile({isDarkMode, label, value, icon}) {
  const contentStyle = contentText(isDarkMode);
  const subcontentStyle = subcontentText();

  return (
    <ProfileInfoCard>
      <Image
        style={{
          width: 20,
          height: 20,
          resizeMode: 'contain',
        }}
        source={icon}
        alt={'Diagnose'}
      />
      <StyledText20
        style={[
          {alignSelf: 'flex-start', marginTop: 7.5},
          contentStyle.semibold,
        ]}>
        {label}
      </StyledText20>
      <StyledText16
        style={[
          {alignSelf: 'flex-start', color: '#7C818C', marginTop: 0},
          subcontentStyle.semibold,
        ]}>
        {value}
      </StyledText16>
    </ProfileInfoCard>
  );
}

export default CardProfile;
