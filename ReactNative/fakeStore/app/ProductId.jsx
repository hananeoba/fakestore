import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ProductId = ({ route }) => {
  const { item } = route.params.otherparams;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              padding: 15,
              flexDirection: "row",
              //flex: 1,
              alignContent: "center",
              justifyContent: "center",
              marginHorizontal: 40,
            }}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>Rating:</Text>
            <Text style={styles.rating}>
              {item.rating.rate} ({item.rating.count} reviews)
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                margin: 5,
                padding: 2,
              }}
            >
              about product :
            </Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 20,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Icon name="edit" size={30} color="#ffbf69" />
              <Text>edit</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Icon name="shopping-cart" size={30} color="#ffbf69" />
              <Text>add to carts</Text>
            </View>
            <View style={{ flexDirection: "column"  }}>
              <Icon name="remove" size={30} color="#ffbf69" />
              <Text>remove</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  productContainer: {
    backgroundColor: "rgba(255, 191, 105, 1)",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    elevation: 2, // Add elevation for shadow on Android
  },
  coverImageContainer: {
    width: "auto",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
  },
  coverImage: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    width: "100%",
    height: "45%",
    resizeMode: "stretch",
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: 80,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    flexWrap: "wrap",
    padding: 20,
    fontSize: 18,
    fontWeight: "bold",
    fontWeight: "bold",
    marginBottom: 5,
    color: "#rgba(255,191,105,0.8)",
  },
  description: {
    fontSize: 16,
    marginHorizontal: 10,
    justifyContent: "center",
    color: "#666666",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    padding: 20,
    color: "rgba(255,191,105,1)",
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
    marginHorizontal: 30,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  rating: {
    fontSize: 16,
    color: "#666666",
    marginHorizontal: 100,
  },
});

export default ProductId;
