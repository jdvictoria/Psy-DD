import styled from 'styled-components';
import {StyleSheet} from 'react-native';

export const StyledText40 = styled.Text`
  align-self: center;
  text-align: center;

  font-size: 40px;
`;

export const StyledText20 = styled.Text`
  align-self: center;
  text-align: center;

  font-size: 20px;
`;

export const StyledText16 = styled.Text`
  align-self: center;
  text-align: center;

  font-size: 16px;
`;

export const contentText = isDarkMode => {
  return StyleSheet.create({
    black: {
      fontFamily: 'Inter-Black',
      color: isDarkMode ? 'white' : '#001133',
    },
    bold: {
      fontFamily: 'Inter-Bold',
      color: isDarkMode ? 'white' : '#001133',
    },
    extrabold: {
      fontFamily: 'Inter-ExtraBold',
      color: isDarkMode ? 'white' : '#001133',
    },
    extralight: {
      fontFamily: 'Inter-ExtraLight',
      color: isDarkMode ? 'white' : '#001133',
    },
    light: {
      fontFamily: 'Inter-Light',
      color: isDarkMode ? 'white' : '#001133',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      color: isDarkMode ? 'white' : '#001133',
    },
    regular: {
      fontFamily: 'Inter-Regular',
      color: isDarkMode ? 'white' : '#001133',
    },
    semibold: {
      fontFamily: 'Inter-SemiBold',
      color: isDarkMode ? 'white' : '#001133',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      color: isDarkMode ? 'white' : '#001133',
    },
  });
};

export const subcontentText = isDarkMode => {
  return StyleSheet.create({
    black: {
      fontFamily: 'Inter-Black',
    },
    bold: {
      fontFamily: 'Inter-Bold',
    },
    extrabold: {
      fontFamily: 'Inter-ExtraBold',
    },
    extralight: {
      fontFamily: 'Inter-ExtraLight',
    },
    light: {
      fontFamily: 'Inter-Light',
    },
    medium: {
      fontFamily: 'Inter-Medium',
    },
    regular: {
      fontFamily: 'Inter-Regular',
    },
    semibold: {
      fontFamily: 'Inter-SemiBold',
    },
    thin: {
      fontFamily: 'Inter-Thin',
    },
  });
};
