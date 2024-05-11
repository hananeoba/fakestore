import React, { useContext, useState } from "react";
import { Pressable, Text, View, StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerActions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import "react-native-gesture-handler";
import AuthContext from "../context/authContext";
import { Orangecolor } from "../styles/GlobalStyle";

const Drawer = createDrawerNavigator();
  
const MyDrawer = ({ navigation }, props) => {
  const [selected, setSelected] = useState("null");
  const { logout, isLoggedIn } = useContext(AuthContext);
  const pressLogout = () => {
    logout();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.item}>
          <Pressable
            style={selected === "Home" ? styles.selectedBox : styles.button}
            onPress={() => {
              setSelected("Home");
              navigation.navigate("Home");
            }}
          >
            <View style={styles.icon}>
              <Icon name="home" size={20} />
            </View>
            <Text style={selected === "Home" ? styles.selectedText : styles.text}>Home</Text>
          </Pressable>
        </View>
        <View style={styles.item}>
          <Pressable
            style={selected === "Profile" ? styles.selectedBox : styles.button}
            onPress={() => {
              setSelected("Profile");
              navigation.navigate("profile");
            }}
          >
            <View style={styles.icon}>
              <Icon name="user" size={20} />
            </View>
            <Text style={selected === "Profile" ? styles.selectedText : styles.text}>Profile</Text>
          </Pressable>
        </View>
        <View style={styles.item}>
          <Pressable
            style={selected === "Cart" ? styles.selectedBox : styles.button}
            onPress={() => {
              setSelected("Cart");
              navigation.navigate("Carts");
            }}
          >
            <View style={styles.icon}>
              <Icon name="shopping-cart" size={20} />
            </View>
            <Text style={selected === "Cart" ? styles.selectedText : styles.text}>Cart</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.logoutContainer}>
        <Pressable
          style={selected === "Logout" ? styles.selectedBox : styles.button}
          onPress={pressLogout}
        >
          <View style={styles.icon}>
            <Icon name="sign-out" size={20} />
          </View>
          <Text style={selected === "Logout" ? styles.selectedText : styles.text}>Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: Orangecolor,
    borderWidth: 1,
  },
  selectedBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: Orangecolor,
    borderRadius: 5,
    
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  selectedText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  logoutContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});

export default MyDrawer;
