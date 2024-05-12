import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Modal, Text, Pressable } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { TextInput } from "react-native";
import axios from "axios";

const ModifyModel = ({ productId, visible, setModalVisible }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductByID = async (id, setProduct) => {
      await axios(`https://fakestoreapi.com/products/${id}`)
        .then((data) => {
          setProduct(data.data);
        })
        .catch((err) => alert(err, "from fetchProductByID"));
    };
    try {
      fetchProductByID(productId, setProduct);
      //console.log(product);
    } catch (err) {
      console.log(err);
    }
    //fetchProductByID(productId);
  }, []);
  const onSubmit = (values) => {
    axios(`https://fakestoreapi.com/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => alert(`data updated ${JSON.stringify(data.data)}`))
      .catch((err) => alert(err));
  };
  const intialValues = {
    title: product ? product.title : "title",
    description: product ? product.description : "description",
    image: product ? product.image : "image",
    price: product ? product.price : "price",
    category: product ? product.category : "category",
    rating: {
      rate: product ? product.rating.rate : "0",
      count: product ? product.rating.count : "0",
    },
  };
  const validationSchema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    image: yup.string().required(),
    price: yup.number().required(),
    category: yup.string().required(),
    rating: yup.object({
      rate: yup.number().required(),
      count: yup.number().required(),
    }),
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setModalVisible(false)}
    >
      <Formik
        initialValues={intialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit(values);
          alert("submitted successfully");
          console.log(values);
        }}
      >
        {(formikProps) => (
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Modify Product</Text>
              <View style={styles.inputField}>
                <Text>Title</Text>
                <TextInput
                  placeholder="title"
                  value={formikProps.values.title}
                  onChangeText={formikProps.handleChange("title")}
                />
                {formikProps.errors.title && formikProps.touched.title ? (
                  <Text>{formikProps.errors.title}</Text>
                ) : null}
              </View>
              {/* Other input fields */}
              <View>
                <Text>Description</Text>
                <TextInput
                  placeholder="description"
                  value={formikProps.values.description}
                  onChangeText={formikProps.handleChange("description")}
                />
                {formikProps.errors.description &&
                formikProps.touched.description ? (
                  <Text>{formikProps.errors.description}</Text>
                ) : null}
              </View>
              <View>
                <Text>Image</Text>
                <TextInput
                  placeholder="your image url"
                  value={formikProps.values.image}
                  onChangeText={formikProps.handleChange("image")}
                />
                {formikProps.errors.image && formikProps.touched.image ? (
                  <Text>{formikProps.errors.image}</Text>
                ) : null}
              </View>
              <View>
                <Text>Price</Text>
                <TextInput
                  placeholder="price"
                  value={formikProps.values.price}
                  onChangeText={formikProps.handleChange("price")}
                />
                {formikProps.errors.price && formikProps.touched.price ? (
                  <Text>{formikProps.errors.price}</Text>
                ) : null}
              </View>
              <View>
                <Text>rate</Text>
                <TextInput
                  placeholder="rate"
                  initialValue={formikProps.values.rating.rate}
                  value={formikProps.values.rating.rate}
                  onChangeText={formikProps.handleChange("rating.rate")}
                  editable={false}
                />
                {formikProps.errors.rating &&
                formikProps.errors.rating.rate &&
                formikProps.touched.rating &&
                formikProps.touched.rating.rate ? (
                  <Text>{formikProps.errors.rating.rate}</Text>
                ) : null}
              </View>
              <View>
                <Text>count</Text>
                <TextInput
                  placeholder="count"
                  value={formikProps.values.rating.count}
                  onChangeText={formikProps.handleChange("rating.count")}
                  editable={false}
                />
                {formikProps.errors.rating &&
                formikProps.errors.rating.count &&
                formikProps.touched.rating &&
                formikProps.touched.rating.count ? (
                  <Text>{formikProps.errors.rating.count}</Text>
                ) : null}
              </View>

              <Pressable
                style={styles.button}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text>Cancel</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => {
                  formikProps.handleSubmit();
                  formikProps.resetForm();
                  setModalVisible(false);
                }}
              >
                <Text>Submit</Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fefe",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputField: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
});

export default ModifyModel;
