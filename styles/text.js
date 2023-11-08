import styled from 'styled-components';
import {StyleSheet} from 'react-native';

export const SampleText = styled.Text`
  align-self: center;
  text-align: center;

  font-size: 35px;
`;

export const textStyle = StyleSheet.create({
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
