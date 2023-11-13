import React from 'react';
import {ScrollView} from 'react-native';

import {
  BodyContainer,
  HeaderContainer,
  ProfileHeaderStyle,
  ProfileInfoCard,
  StyledRow,
  StyledView,
} from '../../../styles/form-container';

import {
  contentText,
  subcontentText,
  StyledText16,
  StyledText20,
} from '../../../styles/form-text';

import CardProfile from '../../atoms/card-profile';

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
            <CardProfile
              isDarkMode={isDarkMode}
              label={'Name'}
              value={'Juan A. Dela Cruz'}
              icon={require('../../../assets/icons/name-icon.png')}
            />
            <CardProfile
              isDarkMode={isDarkMode}
              label={'Age'}
              value={'August 12, 2001'}
              icon={require('../../../assets/icons/age-icon.png')}
            />
          </StyledRow>
          <StyledRow>
            <CardProfile
              isDarkMode={isDarkMode}
              label={'PRC No.'}
              value={'200000'}
              icon={require('../../../assets/icons/code-icon.png')}
            />
            <CardProfile
              isDarkMode={isDarkMode}
              label={'Profession'}
              value={'Psychologist'}
              icon={require('../../../assets/icons/work-icon.png')}
            />
          </StyledRow>
          <StyledRow>
            <CardProfile
              isDarkMode={isDarkMode}
              label={'Reg. Date'}
              value={'2009-01-01'}
              icon={require('../../../assets/icons/reg-icon.png')}
            />
            <CardProfile
              isDarkMode={isDarkMode}
              label={'Exp. Date'}
              value={'2025-01-01'}
              icon={require('../../../assets/icons/exp-icon.png')}
            />
          </StyledRow>
        </ScrollView>
      </BodyContainer>
    </StyledView>
  );
}

export default HomeProfile;
