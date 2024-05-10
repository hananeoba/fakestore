import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { fonts } from "../utils/fonts";
import { Icon } from "react-native-vector-icons/FontAwesome";

const ProductCard = ({ items, handleProductClick }) => {
  return (
    <ScrollView>
        <View style={styles.container1}>
      {items.map((item, index) => (

        <TouchableOpacity
          key={index}
          style={styles.cardContainer}
          onPress={() => handleProductClick(item)}
        >
          <Image source={{ uri: item.image }} style={styles.coverImage} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </TouchableOpacity>
      ))}
        </View>
    </ScrollView>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  container2:{
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  cardContainer: {
    width: "44%", // Adjust as needed
    margin: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff", // Add a background color for better visibility
  },
  coverImage: {
    height: 200, // Adjust as needed
    width: "80%",
    borderRadius: 20,
    resizeMode: "contain",
    alignSelf: "center",
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.regular,
    fontWeight: "700",
    color: "#444444",
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.medium,
    fontWeight: "bold",
  },
});
