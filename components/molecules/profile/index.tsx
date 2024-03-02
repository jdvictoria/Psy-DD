import React from 'react';
import {Image, ScrollView} from 'react-native';

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

import {launchImageLibrary} from 'react-native-image-picker';

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

function HomeProfile({isDarkMode, userID, profile, refetchProfile}: any) {
  const contentStyle = contentText(isDarkMode);
  const subcontentStyle = subcontentText();

  const FirstName = profile.FirstName || '';
  const LastName = profile.LastName || '';
  const Birthday = profile.Birthday || '';
  const License = profile.License || '';
  const ProfPic = profile.ProfilePicture || '';

  const Initials = (FirstName[0] || '') + (LastName[0] || '');

  // @ts-ignore
  const uploadPicture = async imageUri => {
    try {
      // Upload image to Firebase Storage
      const fileName =
        profile.FirstName +
        '-' +
        imageUri.substring(imageUri.lastIndexOf('/') + 1);
      const storageRef = storage().ref(`doctor/${fileName}`);
      const task = storageRef.putFile(imageUri);
      const downloadURL = await task.then(() => storageRef.getDownloadURL());

      const userRef = firestore().collection('Users').doc(userID);

      await userRef.update({
        ProfilePicture: downloadURL,
      });

      refetchProfile();
    } catch (error) {
      console.log('Upload Failed');
    }
  };

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    // @ts-ignore
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        // @ts-ignore
      } else if (response.error) {
        // @ts-ignore
        console.log('Image picker error: ', response.error);
      } else {
        // @ts-ignore
        let imageUri = response.uri || response.assets?.[0]?.uri;
        uploadPicture(imageUri);
      }
    });
  };

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
          }}
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}>
          <ProfileCircle
            style={{backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF'}}
            onPress={openImagePicker}>
            {ProfPic ? (
              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginTop: 25,
                  marginBottom: 25,
                  borderWidth: 1,
                  borderRadius: 50,
                }}
                source={{uri: ProfPic}}
              />
            ) : (
              <StyledText40 style={contentStyle.semibold}>
                {Initials}
              </StyledText40>
            )}
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
