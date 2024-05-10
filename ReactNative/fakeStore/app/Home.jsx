import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";

import * as Font from 'expo-font';

import GlobalStyle from "../src/styles/GlobalStyle";
import { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "../src/context/authContext";
import axios from "axios";
import ProductCard from "../src/components/product";
import ProductId from "./ProductId";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchBar from "../src/components/searchbar";

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
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home2} />
      <Stack.Screen
        name="ProductId"
        component={ProductId}
        initialParams={{
          category: "men's clothing",
          description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          id: 4,
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          price: 15.99,
          rating: { rate: 2.1, count: 430 },
          title: "Mens Casual Slim Fit",
        }}
      />
    </Stack.Navigator>
  );
};
const Home2 = ({ navigation }) => {
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
        const raws= res.data.filter((raw)=>{
          if(search==""||null){
            return raw;
          }
          else if(raw.title.toLowerCase().includes(search.toLowerCase())){
            return raw;
          }
        })
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
      const  raws = res.data.filter((raw)=>{
        if(search==""||null){
          return raw;
        }
        else if(raw.title.toLowerCase().includes(search.toLowerCase())){
          return raw;
        }
      })
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
      <SearchBar setSearch={setSearch }onPress={fetchProduct} search={search}/>
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
                console.log("item:", item);
                 navigation.navigate("ProductId", {
                  otherparams: {
                   item,
                  },
                });
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
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "space-between",
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

export default Home;
