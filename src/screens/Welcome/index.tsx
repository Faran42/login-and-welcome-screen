import React, { useState } from "react";
import { Alert, Modal, View, Text, Pressable } from "react-native";
import {
  Container,
  Title,
  Header,
  MenuIcon,
  ModalContainer,
  MenuWrapper,
  MenuOption,
} from "./styled";

export function Welcome() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <ModalContainer>
          <MenuWrapper>
            <MenuOption onPress={() => setModalVisible(!modalVisible)}>
              Nav to Screen 1
            </MenuOption>
            <MenuOption onPress={() => setModalVisible(!modalVisible)}>
              Nav to Screen 2
            </MenuOption>
            <MenuOption onPress={() => setModalVisible(!modalVisible)}>
              Nav to Screen 3
            </MenuOption>
          </MenuWrapper>
        </ModalContainer>
      </Modal>

      <Container>
        <Header>
          <Title>Boas Vindas</Title>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <MenuIcon name="menu" />
          </Pressable>
        </Header>
      </Container>
    </>
  );
}
