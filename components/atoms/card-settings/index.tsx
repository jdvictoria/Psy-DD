import React from 'react';
import {
  SettingsCard,
  SettingsCardCenter,
  SettingsCardLeft,
  SettingsCardRight,
} from '../../../styles/form-container';
import {Image, Switch} from 'react-native';

import {contentText, StyledText16} from '../../../styles/form-text';

function CardSettings({
  isDarkMode,
  setIsDarkMode,
  icon,
  text,
  rightIcon,
  handleLogOut,
}: any) {
  const contentStyle = contentText(isDarkMode);

  // @ts-ignore
  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <SettingsCard style={{backgroundColor: isDarkMode ? '#1A2230' : '#FFFFFF'}}>
      {rightIcon ? (
        <>
          <SettingsCardLeft>
            <Image
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
                marginRight: 10,
              }}
              source={icon}
              alt={'Dark Mode'}
            />
            <StyledText16 style={contentStyle.medium}>{text}</StyledText16>
          </SettingsCardLeft>
          <SettingsCardRight>
            <Switch
              trackColor={{false: '#767577', true: '#518cff'}}
              thumbColor={isDarkMode ? '#ffffff' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isDarkMode}
            />
          </SettingsCardRight>
        </>
      ) : (
        <SettingsCardCenter onPress={handleLogOut}>
          <Image
            style={{
              width: 35,
              height: 35,
              resizeMode: 'contain',
              marginRight: 10,
            }}
            source={icon}
            alt={'Dark Mode'}
          />
          <StyledText16 style={contentStyle.medium}>{text}</StyledText16>
        </SettingsCardCenter>
      )}
    </SettingsCard>
  );
}

export default CardSettings;
