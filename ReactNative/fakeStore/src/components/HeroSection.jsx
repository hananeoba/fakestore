import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HeroSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.heading}>Welcome to Our Shop</Text>
        <Text style={styles.description}>
          Discover amazing deals on your favorite products.
        </Text>
        <Image
          source={require("../assets/image1.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffbf69",
    padding: 20,
    borderRadius: 8,
    margin: 10,
  },
  contentWrapper: {
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#fff",
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 400, 
    borderRadius: 8,
  },
});

export default HeroSection;
