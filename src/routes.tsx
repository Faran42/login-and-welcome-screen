import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./screens/Login";
import { Welcome } from "./screens/Welcome";

export function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
