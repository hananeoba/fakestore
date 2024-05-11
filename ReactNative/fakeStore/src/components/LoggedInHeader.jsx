import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LoggedInHeader = ({ addProduct }) => {
  return (
    
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-around",
        }}
      >
        <Text>FakeStore</Text>
        <Pressable onPress={addProduct}>
          <Icon name="plus" size={20} />
        </Pressable>
      </View>
    
  );
};

const styles = StyleSheet.create({});

export default LoggedInHeader;
