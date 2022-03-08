import styled from "styled-components/native";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;

  margin-bottom: ${windowHeight * 0.05}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;
export const Label = styled.Text`
  font-size: 18px;
`;
export const Input = styled.TextInput`
  font-size: 16px;
  background-color: #e1e1e1;

  width: ${windowWidth * 0.2}px;

  margin-left: ${windowWidth * 0.01}px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #7159c1;

  padding: 2px 8px;

  align-items: center;
  justify-content: center;

  border-radius: 15px;

  margin-top: ${windowHeight * 0.03}px;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-size: 18px;
`;
