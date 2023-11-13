import styled from 'styled-components';

export const StyledView = styled.View`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;

  flex: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const HeaderContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;

  top: 0;

  width: 100%;
  height: 15%;
`;

export const BodyContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;

  bottom: 0;

  width: 100%;
  height: 85%;
`;
