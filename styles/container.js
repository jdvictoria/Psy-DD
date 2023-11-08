import styled from 'styled-components';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const StyledSafeView = styled.SafeAreaView`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;

  flex: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: #518bfe;
`;
