import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Page from "./index";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login/index"
        options={{
          headerTitle: "Login",
          headerTitleStyle: {
            color: "#ffbf69",
            fontSize: 40,
          },
          headerStyle: {
            padding:20,
            backgroundColor: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="SignUp/index"
        options={{
          headerTitle: "SignUp",
        }}
      />
      <Stack.Screen name='(tabs)' options={{
        headerShown: false,
      }} />   
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default Layout;
