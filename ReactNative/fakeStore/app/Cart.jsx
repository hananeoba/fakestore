import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";

const Cart = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../src/assets/construction.png")}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />
        <Text style={{ textAlign: "center" }}> Screen Under Construction</Text>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
