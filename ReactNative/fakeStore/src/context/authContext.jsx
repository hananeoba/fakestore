import { router } from "expo-router";
import { useState, useEffect, createContext } from "react";

import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";
import GlobalStyle from "../styles/GlobalStyle";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setUser] = useState({});
  const [authToken, setAuthToken] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Define an async function to update the token

  const checkStorageToken = async () => {
    try {
      const access = await AsyncStorage.getItem("token");
      if (access) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error checking storage tokens:", error);
    }
  };

  useEffect(() => {
    checkStorageToken();
  }, []);

  const login = (user_name, password) => {
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
          router.navigate({
            pathname: "/app",
            params: {
              id: 1,
            },
          });
          checkStorageToken();
        })
        .catch((err) => {
          alert(
            `authentification error :your password or username are not correct ${err}`
          );
        });
    } catch (err) {
      alert(err);
    }
  };
  const register = ({ data }) => {
    try {
      fetch("https://fakestoreapi.com/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
        })
        .catch((err) => {
          alert(
            `authentification error :your password or username are not correct ${err}`
          );
        });
    } catch (err) {
      alert(err);
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
