import { useLocalSearchParams } from "expo-router";
import React, { useContext } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { AuthContext } from "../src/context/authContext";

const ProductId = ({ navigation, route }) => {
  const { otherparams } = route.params;
  const item = otherparams.item;
  return (
    <View style={styles.container}>

      <View style={styles.productContainer}>
        <View style={styles.coverImage}>
        <Image source={{ uri: item.image }} style={styles.coverImage} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>Price: ${item.price}</Text>
          <Text style={styles.category}>Category: {item.category}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>Rating: </Text>
            <Text style={styles.rating}>
              {item.rating.rate} ({item.rating.count} reviews)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  productId: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255,191,105,0.5)",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    elevation: 2, // Add elevation for shadow on Android
  },
  coverImage: {
    padding:10,
    width: 150,
    height: 150,
    resizeMode : "contain" ,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333",
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    color: "#666666",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333",
  },
  category: {
    fontSize: 16,
    marginBottom: 5,
    color: "#666666",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  rating: {
    fontSize: 16,
    color: "#666666",
  },
});

export default ProductId;
