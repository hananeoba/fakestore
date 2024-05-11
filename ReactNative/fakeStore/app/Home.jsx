import React from "react";
import { StyleSheet } from "react-native";

import { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "../src/context/authContext";
import axios from "axios";

import ProductId from "./ProductId";

import MyDrawer from "../src/components/CostumDrawer";

import Carts from "./Carts";
import MainHome from "./MainHome";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator initialRouteName="Home2" drawerContent={MyDrawer}>
        {/*<Drawer.Screen name="Home2" component={Home2} options={{
      title: 'Home',
    
    }}/>*/}
        <Drawer.Screen
          name="MainHome"
          component={MainHome}
          options={{
            title: "Home",
          }}
        />
        <Drawer.Screen name="ProductId" component={ProductId} />
        <Drawer.Screen name="Carts" component={Carts} />
      </Drawer.Navigator>
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
