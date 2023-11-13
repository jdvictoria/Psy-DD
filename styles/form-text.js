import styled from 'styled-components';
import {StyleSheet} from 'react-native';

export const SampleText = styled.Text`
  align-self: flex-end;
  text-align: center;

  font-size: 20px;
`;

export const contentText = isDarkMode => {
  return StyleSheet.create({
    black: {
      fontFamily: 'Inter-Black',
      color: isDarkMode ? 'white' : 'black',
    },
    bold: {
      fontFamily: 'Inter-Bold',
      color: isDarkMode ? 'white' : 'black',
    },
    extrabold: {
      fontFamily: 'Inter-ExtraBold',
      color: isDarkMode ? 'white' : 'black',
    },
    extralight: {
      fontFamily: 'Inter-ExtraLight',
      color: isDarkMode ? 'white' : 'black',
    },
    light: {
      fontFamily: 'Inter-Light',
      color: isDarkMode ? 'white' : 'black',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      color: isDarkMode ? 'white' : 'black',
    },
    regular: {
      fontFamily: 'Inter-Regular',
      color: isDarkMode ? 'white' : 'black',
    },
    semibold: {
      fontFamily: 'Inter-SemiBold',
      color: isDarkMode ? 'white' : 'black',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      color: isDarkMode ? 'white' : 'white',
    },
  });
};
