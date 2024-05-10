import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";


import Page from "./index";
import Login from "./login";
import SignUp from "./signup";
import AuthContext from "../src/context/authContext";

import ProductId from "./ProductId";
import Home from "./Home";
import Carts from "./Carts";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Nav = () => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  return (
    <>
      {!isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="index"
            component={Page}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              title: "Home",
              tabBarActiveTintColor: "#ffbf69",
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Carts"
            component={Carts}
            options={{
              headerShown: false,
              title: "",
              tabBarActiveTintColor: "#ffbf69",
              tabBarLabel: "Carts",
              tabBarIcon: ({ color, size }) => (
                <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Icon name="shopping-basket" color={color} size={20} />
                <Text
                style={{borderRadius: 50,
                backgroundColor: "#ffbf69",
                }}
                >
                  {//numberof Items
                  2
                  }
                </Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default Nav;
