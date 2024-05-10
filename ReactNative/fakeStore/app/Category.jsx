import React, {useEffect, useState, useContext} from "react";
import { StyleSheet, View, Text } from "react-native";
import ProductCard from "../src/components/product";
import AuthContext from "../src/context/authContext";

import axios from "axios";



const Category = ({ route, navigation }) => {
    const [isLoading, setIsLoading] = useState(false);

  const { CategoryId, otherParam } = route.params;
  const [products, setProducts] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`https://fakestoreapi.com/products/category/${CategoryId}`)
            .then((res) => {
            setIsLoading(false);
            console.log(res.data);
            setProducts(res.data);
            })
            .catch((err) => {
            setIsLoading(false);
            alert(`Error fetching products: ${err}`);
            });
    }, [CategoryId]);

  return (
    <View style={{ flex: 1, 
    backgroundColor: "#cbf3f0",
    }}>
      <Text style={{
        color: "#ffbf69",
        fontSize: 36,
        fontWeight: "bold",

      }}>{CategoryId}</Text>
      <ProductCard
        items={products}
        handleProductClick={() => {console.log("Product Clicked")}}
      ></ProductCard>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Category;
