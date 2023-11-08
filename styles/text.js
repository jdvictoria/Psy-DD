import styled from 'styled-components';
import {StyleSheet} from 'react-native';

export const SampleText = styled.Text`
  align-self: center;
  text-align: center;

  font-size: 35px;
`;

export const getTextStyles = isDarkMode => {
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
