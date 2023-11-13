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

export const ProfileCircle = styled.View`
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  margin-bottom: 25px;

  width: 100px;
  height: 100px;

  border-radius: 50px;
`;

export const ProfileInfoCard = styled.View`
  justify-content: center;
  align-items: flex-start;

  margin: 10px 7.5px 10px 7.5px;

  padding-left: 15px;

  width: 45%;
  height: 100px;

  border-radius: 15px;
`;
