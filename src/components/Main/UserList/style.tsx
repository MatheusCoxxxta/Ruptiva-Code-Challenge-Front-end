import styled from "styled-components/native";

const Title = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 15px;
  text-align: center;
  color: #fff;
`;

const Box = styled.View`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #8888af;
`;

const ScrollBox = styled.ScrollView`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #8888af;
  padding-left: 20px;
  padding-right: 20px;
`;

const Row = styled.View`
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UserBox = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;

const ImageBg = styled.View`
  background-color: #f0f0f5;
  border-radius: 10px;
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
`;

const TextCol = styled.View`
  padding-left: 25px;
`;

const RowName = styled.Text`
  color: #fff;
  font-size: 19px;
  font-weight: bold;
  text-transform: capitalize;
`;

const RowDoc = styled.Text`
  font-size: 14px;
`;

export {
  Title,
  Box,
  ScrollBox,
  Row,
  UserBox,
  ImageBg,
  TextCol,
  RowName,
  RowDoc,
};
