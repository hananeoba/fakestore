import { router, useNavigation } from "expo-router";
import { useState, useEffect, createContext } from "react";

import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ActivityIndicator, View } from "react-native";
import GlobalStyle from "../styles/GlobalStyle";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setUser] = useState({});
  const [authToken, setAuthToken] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkStorageToken = async () => {
    try {
      const access = await AsyncStorage.getItem("token");
      if (access) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log("Error checking storage tokens:", error);
    }
  };

  useEffect(() => {
    checkStorageToken();
  }, []);

  const login = (user_name, password) => {
    try {
      axios("https://fakestoreapi.com/auth/login", {
        method: "POST",
        data: {
          username: user_name,
          password: password,
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((json) => {
          AsyncStorage.setItem("token", json.data.token);
          checkStorageToken();
        })
        .catch((err) => {
          if (err.response) {
            alert(err.response.data);
          }
        });
    } catch (err) {
      return err;
    }
  };
  const logout = async () => {
    AsyncStorage.removeItem("token");
    alert("You are logged out");
    setIsLoggedIn(false);
    checkStorageToken();
  };
  data = {
    login,
    logout,
    setIsLoading,
    setIsLoggedIn,
    checkStorageToken,
    isLoading,
    isLoggedIn,
    authToken,
    authUser,
  };

  return (
    <AuthContext.Provider value={data}>
      {isLoading && (
        <View style={GlobalStyle.main}>
          <ActivityIndicator size={"large"} color="#ffbf69"></ActivityIndicator>
        </View>
      )}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
