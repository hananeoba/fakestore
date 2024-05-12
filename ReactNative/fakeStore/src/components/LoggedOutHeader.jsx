import React from "react";
import { StyleSheet, View, Pressable, Text, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LoggedOutHeader = ({ navigateToLogin }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <Text style={styles.headerText}>login</Text>
          <Pressable onPress={navigateToLogin} style={styles.loginButton}>
            <Icon name="sign-in" size={20} color={"#ffbc69"} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: 40,

    justifyContent: "center",
    alignItems: "center",
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
  },
  loginButton: {
    padding: 10,
  },
});

export default LoggedOutHeader;
