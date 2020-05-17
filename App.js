import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import Chat from "./components/Chat";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialBottomTabs from "./components/MaterialBottomTabs";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator> */}
      <MaterialBottomTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
