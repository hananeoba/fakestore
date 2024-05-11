import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";

import * as Font from "expo-font";

import GlobalStyle from "../src/styles/GlobalStyle";
import { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "../src/context/authContext";
import axios from "axios";
import ProductCard from "../src/components/product";
import ProductId from "./ProductId";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchBar from "../src/components/searchbar";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Index = ({ navigation }) => {
  const { logout, isLoading, setIsLoading } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [CategoryId, setCategoryId] = useState("");
  const [search, setSearch] = useState("");
  const fetchProductsbyCategory = (CategoryId, search) => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${CategoryId}`)
      .then((res) => {
        setIsLoading(false);
        //console.log(res.data);
        const raws = res.data.filter((raw) => {
          if (search == "" || null) {
            return raw;
          } else if (raw.title.toLowerCase().includes(search.toLowerCase())) {
            return raw;
          }
        });
        setProducts(raws);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(`Error fetching products: ${err}`);
      });
  };
  const fetchProduct = async (search) => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const raws = res.data.filter((raw) => {
        if (search == "" || null) {
          return raw;
        } else if (raw.title.toLowerCase().includes(search.toLowerCase())) {
          return raw;
        }
      });
      setProducts(raws);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchProduct("");
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setIsLoading(false);
      }
    };
    fetchCategory();
  }, []);
  useEffect(() => {
    //fetchProductsbyCategory(CategoryId);
  }, [CategoryId]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.header}>
        <Text style={styles.headerText}></Text>
        <Pressable onPress={logout} style={styles.logoutButton}>
          <Text>Logout</Text>
        </Pressable>
      </View> */}
        <SearchBar
          setSearch={setSearch}
          onPress={fetchProduct}
          search={search}
        />
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Categories:</Text>
          <View style={styles.categories}>
            <Pressable
              style={[
                styles.categoryItem,
                CategoryId === "" && styles.categoryItemSelected,
              ]}
              onPress={() => {
                setCategoryId("");
                fetchProduct(search);
              }}
            >
              <Text style={styles.categoryText}> All </Text>
            </Pressable>
            {categories.map((category, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  setCategoryId(category);
                  fetchProductsbyCategory(category, search);
                }}
                style={[
                  styles.categoryItem,
                  category === CategoryId && styles.categoryItemSelected,
                ]}
              >
                <Text style={styles.categoryText}>{category}</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.productContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <ProductCard
                items={products}
                handleProductClick={(item) => {
                  alert(
                    `you are not logged in please login to see product detail`
                  );
                  navigation.navigate("login");
                }}
              />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center", // Center content horizontally
    backgroundColor: "#f5f5f5", // Light background color
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 15, // Adjust padding for product cards
  },
  categoryContainer: {
    padding: 15, // Adjust padding for categories
  },
  categoryTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold", // Bold title
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start", // Align categories to the left
  },
  categoryItem: {
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#e0e0e0", // Adjust background color
    borderRadius: 5,
  },
  categoryItemSelected: {
    backgroundColor: "#ffc107", // Highlight color for selected category
  },
  categoryText: {
    fontSize: 16,
  },
  productContainer: {
    flex: 1,
  },
});

export default Index;
