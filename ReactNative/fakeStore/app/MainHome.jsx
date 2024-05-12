import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";

//import Stat
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../src/context/authContext";
import axios from "axios";
import ProductCard from "../src/components/product";

import SearchBar from "../src/components/searchbar";

import LoggedInHeader from "../src/components/LoggedInHeader";
import LoggedOutHeader from "../src/components/LoggedOutHeader";
import HeroSection from "../src/components/HeroSection";

const MainHome = ({ navigation }) => {
  const { logout, isLoading, setIsLoading, isLoggedIn } =
    useContext(AuthContext);
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

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View>
          {isLoggedIn ? (
            <LoggedInHeader
              addProduct={() => navigation.navigate("addProduct")}
            />
          ) : (
            <LoggedOutHeader
              navigateToLogin={() => navigation.navigate("login")}
            />
          )}
        </View>
        <ScrollView>
          <HeroSection />
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
          <View style={styles.productContainer}>
            {products.length > 0 ? (
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <ProductCard
                  items={products}
                  handleProductClick={(item) => {
                    navigation.navigate("ProductId", {
                      otherparams: {
                        item,
                      },
                    });
                  }}
                />
              </ScrollView>
            ) : (
              <Text>No products found</Text>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //display: "flex",
    //flexDirection: "column",
    //paddingTop: 34,
    flex: 1,
    justifyContent: "space-arround",
    alignItems: "space-arround",
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    paddingTop: 10,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#f0f0f0",
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
    padding: 20,
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
  categoryItemSelected: {
    backgroundColor: "rgb(255,191,105)", // Change to your desired highlight color
  },
  categoryText: {
    fontSize: 16,
  },
  productContainer: {
    flex: 1,
    //backgroundColor: "#f0f0f0",
  },
});

export default MainHome;
