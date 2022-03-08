import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { Welcome } from "../Welcome";

import {
  Container,
  Wrapper,
  Label,
  Input,
  Title,
  Button,
  ButtonLabel,
} from "./styles";

export function Login() {
  const navigation = useNavigation();

  const mockedData = {
    username: "Admin",
    passowrd: "cenoura",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(e: string) {
    setUsername(e);
    console.log(username);
  }

  function handlePasswordChange(e: string) {
    setPassword(e);
    console.log(password);
  }

  function handleLoginAction() {
    if (username === mockedData.username && password === mockedData.passowrd) {
      console.log("User logado");
      return navigation.navigate("Welcome");
    }

    return console.log("Dados não encontrados");
  }

  return (
    <Container>
      <Title>Tela de Login</Title>
      <Wrapper>
        <Label>Username:</Label>
        <Input onChangeText={(text) => handleUsernameChange(text)} />
      </Wrapper>
      <Wrapper>
        <Label>Password:</Label>
        <Input
          secureTextEntry
          onChangeText={(text) => handlePasswordChange(text)}
        />
      </Wrapper>

      <Button>
        <ButtonLabel onPress={() => handleLoginAction()}>Entrar</ButtonLabel>
      </Button>
    </Container>
  );
}
