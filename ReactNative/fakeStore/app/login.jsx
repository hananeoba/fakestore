import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, link, Link } from "expo-router";
import GlobalStyle from "../src/styles/GlobalStyle";
import { useContext, useState } from "react";
import { AuthContext } from "../src/context/authContext";

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <View style={GlobalStyle.container}>
      <View
        style={{
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={GlobalStyle.title}></Text>
          <Image
            source={require("../src/assets/login.png")}
            style={{
              width: "100%",
              height: 200,
            }}
          />
        </View>
      </View>
      <Text style={GlobalStyle.subtitle}>Login</Text>

      <Text style={GlobalStyle.text}>User Name</Text>
      <TextInput
        placeholder="your_user_name"
        onChangeText={(text) => setUsername(text)}
        style={GlobalStyle.input}
      />
      <Text style={GlobalStyle.text}>Password</Text>
      <TextInput
        placeholder="your_password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        style={GlobalStyle.input}
      />
      {error ? <Text style={GlobalStyle.error}>{error}</Text> : null}
      <Pressable
        onPress={() => {
          login(username, password);
        }}
        style={GlobalStyle.button}
      >
        <Text style={GlobalStyle.buttonText}>Login</Text>
      </Pressable>

      <Text
        style={{
          color: "black",
          textAlign: "center",
          marginTop: 20,
          fontSize: 14,
        }}
      >
        do not have accout yet{" "}
      </Text>
      <Pressable
        onPress={() => {
          navigation.navigate("signup");
        }}
      >
        <Text
          style={{
            color: "#ffc60c",
            textAlign: "center",
            marginTop: 20,
            fontSize: 20,
          }}
        >
          Register now
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
