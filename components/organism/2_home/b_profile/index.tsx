import React from 'react';
import {Image, ScrollView} from 'react-native';

import {
  BodyContainer,
  HeaderContainer,
  ProfileHeaderStyle,
  ProfileInfoCard,
  StyledRow,
  StyledView,
} from '../../../../styles/form-container';

import {
  contentText,
  subcontentText,
  StyledText16,
  StyledText20,
} from '../../../../styles/form-text';

// @ts-ignore
function HomeProfile({isDarkMode}) {
  const contentStyle = contentText(isDarkMode);
  const subcontentStyle = subcontentText();

  return (
    <StyledView>
      <HeaderContainer
        style={{backgroundColor: isDarkMode ? '#010919' : '#F8FAFF'}}>
        <StyledText20 style={[{alignSelf: 'flex-end'}, contentStyle.semibold]}>
          PROFILE
        </StyledText20>
      </HeaderContainer>
      <BodyContainer
        style={{backgroundColor: isDarkMode ? '#010919' : '#F8FAFF'}}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}>
          <StyledText20 style={contentStyle.semibold}>
            Juan A. Dela Cruz
          </StyledText20>
          <StyledText16 style={[{color: '#7C818C'}, subcontentStyle.semibold]}>
            Psychologist
          </StyledText16>
          <StyledRow>
            <ProfileInfoCard>
              <Image
                style={{
                  width: 15,
                  height: 15,
                  resizeMode: 'contain',
                }}
                source={require('../../../../assets/icons/name-icon.png')}
                alt={'Diagnose'}
              />
              <StyledText20
                style={[
                  {alignSelf: 'flex-start', marginTop: 7.5},
                  contentStyle.semibold,
                ]}>
                Name
              </StyledText20>
              <StyledText16
                style={[
                  {alignSelf: 'flex-start', color: '#7C818C', marginTop: 0},
                  subcontentStyle.semibold,
                ]}>
                Juan A. Dela Cruz
              </StyledText16>
            </ProfileInfoCard>
            <ProfileInfoCard />
          </StyledRow>
        </ScrollView>
      </BodyContainer>
    </StyledView>
  );
}

export default HomeProfile;
