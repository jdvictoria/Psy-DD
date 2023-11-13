import styled from 'styled-components';
import {StyleSheet} from 'react-native';

export const StyledText40 = styled.Text`
  align-self: center;
  text-align: center;

  font-size: 40px;
`;

export const StyledText30 = styled.Text`
  align-self: center;
  text-align: center;

  font-size: 27.5px;
`;

export const StyledText17 = styled.Text`
  align-self: flex-start;
  text-align: center;

  font-size: 17px;
`;

export const StyledText16 = styled.Text`
  align-self: center;
  text-align: center;

  font-size: 16px;
`;

export const StyledText12 = styled.Text`
  align-self: center;
  text-align: center;

  font-size: 14px;
`;

export const contentText = isDarkMode => {
  return StyleSheet.create({
    black: {
      fontFamily: 'Inter-Black',
      color: isDarkMode ? 'black' : 'white',
    },
    bold: {
      fontFamily: 'Inter-Bold',
      color: isDarkMode ? 'black' : 'white',
    },
    extrabold: {
      fontFamily: 'Inter-ExtraBold',
      color: isDarkMode ? 'black' : 'white',
    },
    extralight: {
      fontFamily: 'Inter-ExtraLight',
      color: isDarkMode ? 'black' : 'white',
    },
    light: {
      fontFamily: 'Inter-Light',
      color: isDarkMode ? 'black' : 'white',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      color: isDarkMode ? 'black' : 'white',
    },
    regular: {
      fontFamily: 'Inter-Regular',
      color: isDarkMode ? 'black' : 'white',
    },
    semibold: {
      fontFamily: 'Inter-SemiBold',
      color: isDarkMode ? 'black' : 'white',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      color: isDarkMode ? 'black' : 'white',
    },
  });
};

export const inputText = isDarkMode => {
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
