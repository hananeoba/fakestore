import React from "react";
import { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "../src/context/authContext";
import axios from "axios";

import ProductId from "./ProductId";

import MyDrawer from "../src/components/CostumDrawer";

import Cart from "./Cart";
import MainHome from "./MainHome";
import AddProduct from "./addProduct";
import Profile from "./Profile";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Home = ({ navigation }) => {
  const { setIsLoading } = useContext(AuthContext);
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
      <Drawer.Navigator initialRouteName="MainHome" drawerContent={MyDrawer}>
        <Drawer.Screen
          name="MainHome"
          component={MainHome}
          options={{
            title: "Home",
          }}
        />
        <Drawer.Screen name="ProductId" component={ProductId} />
        <Drawer.Screen name="addProduct" component={AddProduct} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </>
  );
};

export default Home;
