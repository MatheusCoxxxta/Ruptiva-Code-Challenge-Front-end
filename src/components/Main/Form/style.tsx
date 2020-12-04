import styled from "styled-components/native";

const FormLabel = styled.Text`
  color: #777777;
  font-size: 15px;
  text-align: left;
`;

const InputGroup = styled.View`
  align-items: center;
`;

const FormInput = styled.TextInput`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 10px;
  background-color: #fff;
`;

const FormButton = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  margin: 10px;
  background-color: #00b2ff;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;

const WarningLabel = styled.Text`
  color: #f11;
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export {
  FormLabel,
  InputGroup,
  FormInput,
  FormButton,
  ButtonText,
  WarningLabel,
};
