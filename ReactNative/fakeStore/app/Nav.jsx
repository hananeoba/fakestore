import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import { Slot } from "expo-router";

import Page from "./index";
import Login from "./login";
import SignUp from "./signup";
import AuthContext from "../src/context/authContext";
import Product from "./[ProductId]";
import Users from "./Users/[UserId]";
import ProductId from "./[ProductId]";
import UserId from "./Users/[UserId]";
import Home from "./Home";
import Category from "./Category";
import Carts from "./Carts";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Nav = () => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  return (
    <>
      {!isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="index" component={Page} options={
            {
                headerShown: false
            }
          } />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
            <Tab.Screen name= "Home" component={Home} options={
            {
                headerShown: false,
                title: "Home",
                tabBarActiveTintColor: "#ffbf69",
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                )

            }
            }/>
          <Tab.Screen name="[ProductId]" component={ProductId} options={
            {
                headerShown: false,
                title: "Carts",
                tabBarActiveTintColor: "#ffbf69",
                tabBarLabel: "Carts",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="shopping-basket" color={color} size={20} />
                )
            }
          } />
        </Tab.Navigator>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default Nav;
