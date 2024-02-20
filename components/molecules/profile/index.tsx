import React from 'react';
import {ScrollView} from 'react-native';

import {
  BodyContainer,
  HeaderContainer,
  ProfileCircle,
  StyledCol,
  StyledRow,
  StyledView,
} from '../../../styles/form-container';

import {
  contentText,
  subcontentText,
  StyledText16,
  StyledText20,
  StyledText40,
} from '../../../styles/form-text';

import CardProfile from '../../atoms/card-profile';

// @ts-ignore
function HomeProfile({isDarkMode, profile}) {
  const contentStyle = contentText(isDarkMode);
  const subcontentStyle = subcontentText();

  const FirstName = profile.FirstName || '';
  const LastName = profile.LastName || '';
  const Birthday = profile.Birthday || '';
  const License = profile.License || '';

  return (
    <StyledView>
      <HeaderContainer
        style={{backgroundColor: isDarkMode ? '#010919' : '#EFEFEF'}}>
        <StyledText20
          style={[
            {alignSelf: 'flex-end', paddingBottom: 15},
            contentStyle.semibold,
          ]}>
          PROFILE
        </StyledText20>
      </HeaderContainer>
      <BodyContainer
        style={{backgroundColor: isDarkMode ? '#010919' : '#EFEFEF'}}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 125,
            // backgroundColor: 'red',
          }}
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}>
          <ProfileCircle
            style={{backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF'}}>
            <StyledText40 style={contentStyle.semibold}>JD</StyledText40>
          </ProfileCircle>
          <StyledCol style={{marginBottom: 25}}>
            <StyledText20 style={contentStyle.semibold}>
              {profile.FirstName + ' ' + profile.LastName}
            </StyledText20>
            <StyledText16
              style={[{color: '#7C818C'}, subcontentStyle.semibold]}>
              Psychologist
            </StyledText16>
          </StyledCol>
          <StyledRow>
            <CardProfile
              isDarkMode={isDarkMode}
              label={'Name'}
              value={FirstName + ' ' + LastName}
              icon={require('../../../assets/icons/name-icon.png')}
            />
            <CardProfile
              isDarkMode={isDarkMode}
              label={'Birthday'}
              value={Birthday}
              icon={require('../../../assets/icons/age-icon.png')}
            />
          </StyledRow>
          <StyledRow>
            <CardProfile
              isDarkMode={isDarkMode}
              label={'PRC No.'}
              value={License}
              icon={require('../../../assets/icons/code-icon.png')}
            />
            <CardProfile
              isDarkMode={isDarkMode}
              label={'Profession'}
              value={'PSYCHOLOGIST'}
              icon={require('../../../assets/icons/work-icon.png')}
            />
          </StyledRow>
        </ScrollView>
      </BodyContainer>
    </StyledView>
  );
}

export default HomeProfile;
