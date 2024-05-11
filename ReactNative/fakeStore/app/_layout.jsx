import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./signup";
import { AuthProvider } from "../src/context/authContext";
import Nav from "./Nav";

//const Drawer = createDrawerNavigator();
const Layout = () => {
  return (
    
      <AuthProvider>
        <Nav />
      </AuthProvider>
  );
};

const styles = StyleSheet.create({});

export default Layout;
