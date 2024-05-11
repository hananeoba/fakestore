import React from "react";
import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, link, Link } from "expo-router";
import GlobalStyle from "../src/styles/GlobalStyle";
import { useContext } from "react";
import { AuthContext } from "../src/context/authContext";

const Login = ({ navigation }) => {
    const {login} = useContext(AuthContext);
  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.title}>Welcome to fakeStore</Text>

      <Text style={GlobalStyle.subtitle}>Login</Text>

      <Text style={GlobalStyle.text}>User Name</Text>
      <TextInput
        placeholder="your_user_name"
        onChangeText={(text) => console.log(text)}
        style={GlobalStyle.input}
      />
      <Text style={GlobalStyle.text}>Password</Text>
      <TextInput
        placeholder="your_password"
        secureTextEntry={true}
        onChangeText={(text) => console.log(text)}
        style={GlobalStyle.input}
      />

      <Pressable
        onPress={() => {
          login();
        }}
        style={GlobalStyle.button}
      >
        <Text style={GlobalStyle.buttonText}>Login</Text>
      </Pressable>
      
        <Text style={{
          color: "black",
          textAlign: "center",
          marginTop: 20,
          fontSize: 14,
        }}>do not have accout yet  </Text>
        <Pressable
        onPress={() => {
          navigation.navigate("signup");
        }}
      >
      <Text style={{
          color: "#ffc60c",
          textAlign: "center",
          marginTop: 20,
          fontSize: 20,
        }}>Register now</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
