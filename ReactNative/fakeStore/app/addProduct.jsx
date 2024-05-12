import React from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AddProduct = ({ navigation }) => {
  const initialValues = {
    title: "",
    description: "",
    image: "",
    price: "",
    rating: {
      rate: "",
      count: "",
    },
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    image: Yup.string().required("Image URL is required"),
    price: Yup.number().required("Price is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        values
      );
      console.log(response.data);
      alert("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product");
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Product</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
          navigation.goBack();
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Title"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />
            {touched.title && errors.title && (
              <Text style={styles.error}>{errors.title}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Description"
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
            />
            {touched.description && errors.description && (
              <Text style={styles.error}>{errors.description}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Image URL"
              onChangeText={handleChange("image")}
              onBlur={handleBlur("image")}
              value={values.image}
            />
            {touched.image && errors.image && (
              <Text style={styles.error}>{errors.image}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Price"
              onChangeText={handleChange("price")}
              onBlur={handleBlur("price")}
              value={values.price}
            />
            {touched.price && errors.price && (
              <Text style={styles.error}>{errors.price}</Text>
            )}

            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
              <Pressable style={styles.button} onPress={()=>{
              handleSubmit();
              resetForm();
              }}>
                <Text style={styles.buttonText}>Add Product</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={()=>{
              resetForm();
              navigation.goBack();
              }}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 5,
  },
});

export default AddProduct;
