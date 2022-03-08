import styled from "styled-components/native";

import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;

  padding: 0 ${windowWidth * 0.03}px;
`;

export const Header = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-top: ${windowHeight * 0.1}px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #7159c1;
`;

export const MenuIcon = styled(Feather)`
  color: #7159c1;
  font-size: 32px;
`;

export const ModalContainer = styled.View`
  background-color: transparent;

  align-items: flex-end;
  margin-top: ${windowHeight * 0.06}px;

 


`;

export const MenuWrapper = styled.View`
  background-color: #7159c1;

  width: ${windowWidth * 0.3}px;
  height: ${windowHeight * 0.4}px;

  justify-content: space-around;
  align-items: center;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const MenuOption = styled.Text`
  color: #fff;
  font-size: 15px;
`;
