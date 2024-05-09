import React from "react";
import { router, Link } from "expo-router";
import { StyleSheet, TextInput, View, Text, Pressable, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyle from "../../src/styles/GlobalStyle";
const SignUp = () => {
  const signup = () => {
    console.log("Login");
    try {
        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res=>res.json())
            .then((json)=>{console.log(json);
                AsyncStorage.setItem('token',json.token);
                router.push('/Login')
            })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={GlobalStyle.container}>
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
          signup();
        }}
        style={GlobalStyle.button}
      >
        <Text style={GlobalStyle.buttonText}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SignUp;
