import styled from 'styled-components';

export const FormBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 85%;
  height: 42.5%;

  border: 1px;
  border-radius: 25px;
`;

export const FormButton = styled.TouchableOpacity`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;

  bottom: 0;
  height: 15%;
  width: 100%;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  background: #518bfe;
`;

export const FormInput = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  height: 70%;
  width: 87.5%;
`;

export const FormTextInput = styled.TextInput`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  padding-left: 25px;

  border-radius: 10px;

  font-size: 16px;
  color: #94a4ac;
  background-color: #1a2230;
`;
