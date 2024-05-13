import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LoggedInHeader = ({ addProduct }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>add your product</Text>
      <Pressable style={styles.Button} onPress={addProduct}>
        <Icon name="plus" size={20} color={"#ffbc69"} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  headerWrapper: {
    width: "80%",
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-arround",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    color: "#ffbc69",
    fontSize: 24,
    fontWeight: "bold",
  },
  Button: {
    padding: 10,
  },
});

export default LoggedInHeader;
