import React from "react";
import { StyleSheet, View, Pressable, Text, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LoggedOutHeader = ({ navigateToLogin }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={navigateToLogin} style={styles.loginButton}>
          <Text style={styles.headerText}>login</Text>
          <Icon name="sign-in" size={20} color={"#ffbc69"} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: 40,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  headerWrapper: {
    width: "80%", // Adjust the width as needed
  },
  header: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-arround",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    color: "#ffbc69",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  loginButton: {
    flexDirection: "row",
    justifyContent: "space-arround",
    alignItems: "center",
  },
});

export default LoggedOutHeader;
