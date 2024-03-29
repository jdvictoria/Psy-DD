import styled from 'styled-components';

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

export const StyledKeyboardView = styled.KeyboardAvoidingView`
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

export const StyledRow = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const StyledCol = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
