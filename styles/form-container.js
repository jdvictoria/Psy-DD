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

export const StyledTouchableRow = styled.TouchableOpacity`
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

  margin-top: 25px;
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

export const SettingsCard = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin-top: 10px;
  margin-bottom: 10px;

  width: 85%;
  height: 60px;

  border-radius: 20px;
`;

export const SettingsCardLeft = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  left: 25px;
`;

export const SettingsCardCenter = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SettingsCardRight = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  right: 25px;
`;

export const DiagnoseResultCard = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin-top: 10px;
  margin-bottom: 10px;

  width: 90%;
  min-height: 60px;
  height: auto;

  border-radius: 20px;
`;

export const DiagnoseResultLeft = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  left: 0;

  margin-top: 10px;
  margin-bottom: 10px;

  width: 40%;
  height: 60px;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const DiagnoseResultRight = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  right: 0;

  margin-top: 10px;
  margin-bottom: 10px;

  width: 40%;
  height: 60px;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const DiagnoseResultCenter = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin-top: 10px;
  margin-bottom: 10px;

  width: 20%;
  height: 60px;
`;

export const DiagnoseSymptomCard = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 1px;

  width: 90%;
  height: 240px;

  border-radius: 20px;
`;

export const DiagnoseSymptomAdd = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  bottom: 0;

  width: 100%;
  height: 60px;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
