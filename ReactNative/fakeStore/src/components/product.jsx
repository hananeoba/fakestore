import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthContext } from "../context/authContext";

const ProductCard = ({ items, handleProductClick }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <ScrollView>
      <View style={styles.container1}>
        {items?.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardContainer}
            onPress={() => handleProductClick(item)}
          >
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(255,191,105,0.3)",
                  borderRadius: 10,
                }}
              >
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity>
                  <Icon name="shopping-bag" size={23} color={""} />
                </TouchableOpacity>
              </View>
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
    borderColor: "rgba(0,0,0,0.5)",
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  cardContainer: {
    width: 140, 
    margin: 10,
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "rgb(0,0,1)",
    borderWidth: 1,
  },
  coverImage: {
    height: 200,
    width: "75%",
    borderRadius: 20,
    resizeMode: "contain",
    alignSelf: "center",
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#444444",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
