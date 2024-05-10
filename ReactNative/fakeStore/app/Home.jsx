import React from "react";
import { StyleSheet, SafeAreaView, View, Text, Pressable, ScrollView } from "react-native";
import GlobalStyle from "../src/styles/GlobalStyle";
import { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "../src/context/authContext";
import axios from "axios";
import ProductCard from "../src/components/product";
import Category from "./Category";

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  const { logout, isLoading, setIsLoading } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products/categories");
        setCategories(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setIsLoading(false);
      }
    };
    fetchCategory();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home2} />
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
};
const Home2 = ({ navigation }) => {
  const { logout, isLoading, setIsLoading } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products/categories");
        setCategories(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setIsLoading(false);
      }
    };
    fetchCategory();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home</Text>
          <Pressable onPress={logout} style={styles.logoutButton}>
            <Text>Logout</Text>
          </Pressable>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Categories:</Text>
          <View style={styles.categories}>
            {categories.map((category, index) => (
              <Pressable
                key={index}
                onPress={() => navigation.navigate("Category", { CategoryId: category })}
                style={styles.categoryItem}
              >
                <Text style={styles.categoryText}>{category}</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={styles.productContainer}>
          <ProductCard items={products} handleProductClick={() => console.log("Product Clicked")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  logoutButton: {
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  categoryItem: {
    marginRight: 10,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 16,
  },
  productContainer: {
    marginBottom: 20,
  },
});

export default Home;
