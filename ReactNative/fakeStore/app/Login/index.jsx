import React from "react";
import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, link, Link } from "expo-router";
import GlobalStyle from "../../src/styles/GlobalStyle";
const Login = () => {
  const loginwithme = () => {
    console.log("Login");
    try {
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          AsyncStorage.setItem("token", json.token);
          console.log(json.token);
          router.push({
            pathname: "/(tabs)",
            params: {
              id: 1,
            },
          })
          
        }).catch((err) => { alert(`authentification error :your password or username are not correct ${err}`) });
    } catch (err) {
      alert(err);
    }
  };

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
          loginwithme();
        }}
        style={GlobalStyle.button}
      >
        <Text style={GlobalStyle.buttonText}>Login</Text>
      </Pressable>
      <Link href="/SignUp"> not registered yet? Register here</Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
