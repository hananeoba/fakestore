import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Formik } from 'formik';

const AddProduct = () => {
    return (
        <View>
            <Text>Add Product</Text>
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
                  formikProps.resetForm();
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
        </View>
    );
}

const styles = StyleSheet.create({})

export default AddProduct;
