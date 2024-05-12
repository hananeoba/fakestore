import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./login";
import SignUp from "./signup";
import AuthContext from "../src/context/authContext";

import ProductId from "./ProductId";
import Home from "./Home";

import MainHome from "./MainHome";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Nav = () => {
  const { isLoggedIn, isLoading, checkStorageToken } = useContext(AuthContext);
  useEffect(() => {
    checkStorageToken();
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="MainHome"
      options={{
        headerShown: false,
      }}
    >
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="MainHome"
            component={MainHome}
            options={{
              headerShown: false,

              headerTitle: "fakeStore",
              headerStyle: {
                backgroundColor: "#ffc60c",
              },
              headerTitleStyle: {
                color: "black",
              },
              headerTintColor: "black",
            }}
          />
          <Stack.Screen
            name="ProductId"
            component={ProductId}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signup"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Nav;
