import React from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import GlobalStyle, { Orangecolor } from "../src/styles/GlobalStyle";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
  name: yup.object().shape({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
  }),
  address: yup.object().shape({
    city: yup.string().required("City is required"),
    street: yup.string().required("Street is required"),
    number: yup.string().required("Number is required"),
    zipcode: yup.string().required("Zipcode is required"),
    geolocation: yup.object().shape({
      lat: yup.string().required("Latitude is required"),
      long: yup.string().required("Longitude is required"),
    }),
  }),
  phone: yup.string().required("Phone number is required"),
});

const SignupForm = ({ navigation }) => {
  return (
    <View style={GlobalStyle.container}>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          name: {
            firstname: "",
            lastname: "",
          },
          address: {
            city: "",
            street: "",
            number: "",
            zipcode: "",
            geolocation: {
              lat: "",
              long: "",
            },
          },
          phone: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert("User registered successfully");
          navigation.navigate("login");
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            <TextInput
              style={[
                GlobalStyle.input,
                {
                  width: 311,
                  borderRadius: 10,
                  borderColor: Orangecolor,
                  borderWidth: 1,
                  marginRight: 6,
                  padding: 8,
                  marginBottom: 6, 
                },
              ]}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && touched.email && (
              <Text style={GlobalStyle.error}>{errors.email}</Text>
            )}

            <TextInput
              style={[
                GlobalStyle.input,
                {
                  width: 311,
                  borderRadius: 10,
                  borderColor: Orangecolor,
                  borderWidth: 1,
                  marginRight: 6,
                  padding: 8,
                  marginBottom: 6, 
                },
              ]}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              placeholder="Username"
            />
            {errors.username && touched.username && (
              <Text style={GlobalStyle.error}>{errors.username}</Text>
            )}

            <TextInput
              style={[
                GlobalStyle.input,
                {
                  width: 311,
                  borderRadius: 10,
                  borderColor: Orangecolor,
                  borderWidth: 1,
                  marginBottom: 6,
                  padding: 8,
                  marginBottom: 6, 
                },
              ]}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="Password"
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={GlobalStyle.error}>{errors.password}</Text>
            )}

            <Text style={GlobalStyle.text}>Name:</Text>
            <View style={{ flexDirection: "row", alignItems: "space-between" }}>
              <View
                style={{ flexDirection: "column" }}
              >
                <TextInput
                  style={[
                    GlobalStyle.input,
                    {
                      width: 150,
                      borderRadius: 10,
                      borderColor: Orangecolor,
                      borderWidth: 1,
                      marginRight: 6,
                      padding: 8,
                      marginBottom: 6, 
                    },
                  ]}
                  onChangeText={handleChange("name.firstname")}
                  onBlur={handleBlur("name.firstname")}
                  value={values.name.firstname}
                  placeholder="First name"
                />
                {(errors.name?.firstname || errors.name?.lastname) &&
                  (touched.name?.firstname || touched.name?.lastname) && (
                    <Text style={GlobalStyle.error}>
                      {errors.name.firstname || errors.name.lastname}
                    </Text>)}
              </View>
              <View
                style={{ flexDirection: "column", }}
              >
                <TextInput
                  style={[
                    GlobalStyle.input,
                    {
                      width: 150,
                      borderRadius: 10,
                      borderColor: Orangecolor,
                      borderWidth: 1,
                      padding: 8,
                      marginBottom: 6,  
                    },
                  ]}
                  onChangeText={handleChange("name.lastname")}
                  onBlur={handleBlur("name.lastname")}
                  value={values.name.lastname}
                  placeholder="Last name"
                />
         {(errors.name?.lastname || errors.name?.lastname) &&
                  (touched.name?.lastname || touched.name?.lastname) && (
                    <Text style={GlobalStyle.error}>
                      {errors.name.lastname || errors.name.lastname}
                    </Text>)}
              </View>
            </View>

            <Text style={GlobalStyle.text}>Address:</Text>
            <View style={{ flexDirection: "row", alignItems: "space-between" }}>
              <View
                style={{ flexDirection: "column",  }}
              >
                <TextInput
                  style={[
                    GlobalStyle.input,
                    {
                      width: 150,
                      borderRadius: 10,
                      borderColor: Orangecolor,
                      borderWidth: 1,
                      marginRight: 6,
                      padding: 8,
                      marginBottom: 6, 
                    },
                  ]}
                  onChangeText={handleChange("address.city")}
                  onBlur={handleBlur("address.city")}
                  value={values.address.city}
                  placeholder="City"
                />
                {errors.address?.city && touched.address?.city && (
                  <Text style={GlobalStyle.error}>{errors.address.city}</Text>
                )}
              </View>
              <View
                style={{ flexDirection: "column" }}
              >
                <TextInput
                  style={[
                    GlobalStyle.input,
                    {
                      width: 150,
                      borderRadius: 10,
                      borderColor: Orangecolor,
                      borderWidth: 1,
                      padding: 8,
                      marginBottom: 6, 
                    },
                  ]}
                  onChangeText={handleChange("address.street")}
                  onBlur={handleBlur("address.street")}
                  value={values.address.street}
                  placeholder="Street"
                />
                {errors.address?.street && touched.address?.street && (
                  <Text style={GlobalStyle.error}>{errors.address.street}</Text>
                )}
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "space-between" }}>
              <View
                style={{ flexDirection: "column" }}
              >
                <TextInput
                  style={[
                    GlobalStyle.input,
                    {
                      width: 150,
                      borderRadius: 10,
                      borderColor: Orangecolor,
                      borderWidth: 1,
                      marginRight: 6,
                      padding: 8,
                      marginBottom: 6, 
                    },
                  ]}
                  onChangeText={handleChange("address.number")}
                  onBlur={handleBlur("address.number")}
                  value={values.address.number}
                  placeholder="Number"
                  keyboardType="numeric"
                />
                {errors.address?.number && touched.address?.number && (
                  <Text style={GlobalStyle.error}>{errors.address.number}</Text>
                )}
              </View>
              <View
                style={{ flexDirection: "column", }}
              >
                <TextInput
                  style={[
                    GlobalStyle.input,
                    {
                      width: 150,
                      borderRadius: 10,
                      borderColor: Orangecolor,
                      borderWidth: 1,
                      padding: 8,
                      marginBottom: 6, 
                    },
                  ]}
                  onChangeText={handleChange("address.zipcode")}
                  onBlur={handleBlur("address.zipcode")}
                  value={values.address.zipcode}
                  placeholder="Zipcode"
                  keyboardType="numeric"
                />
                {errors.address?.zipcode && touched.address?.zipcode && (
                  <Text style={GlobalStyle.error}>
                    {errors.address.zipcode}
                  </Text>
                )}
              </View>
            </View>
            <Text style={GlobalStyle.text}>Geolocation:</Text>
            <View style={{ flexDirection: "row", alignItems: "space-between" }}>
              <View
                style={{ flexDirection: "column" }}
              >
                <TextInput
                  style={[
                    GlobalStyle.input,
                    {
                      width: 150,
                      borderRadius: 10,
                      borderColor: Orangecolor,
                      borderWidth: 1,
                      marginRight: 6,
                      padding: 8,
                      marginBottom: 6, 
                    },
                  ]}
                  onChangeText={handleChange("address.geolocation.lat")}
                  onBlur={handleBlur("address.geolocation.lat")}
                  value={values.address.geolocation.lat}
                  placeholder="Latitude"
                />
                {errors.address?.geolocation?.lat &&
                  touched.address?.geolocation?.lat && (
                    <Text style={GlobalStyle.error}>
                      {errors.address.geolocation.lat}
                    </Text>
                  )}
              </View>
              <View
                style={{ flexDirection: "column" }}
              >
                <TextInput
                  style={[
                    GlobalStyle.input,
                    {
                      width: 150,
                      borderRadius: 10,
                      borderColor: Orangecolor,
                      borderWidth: 1,
                      padding: 8,
                      marginBottom: 6, 
                    },
                  ]}
                  onChangeText={handleChange("address.geolocation.long")}
                  onBlur={handleBlur("address.geolocation.long")}
                  value={values.address.geolocation.long}
                  placeholder="Longitude"
                />
                {errors.address?.geolocation?.long &&
                  touched.address?.geolocation?.long && (
                    <Text style={GlobalStyle.error}>
                      {errors.address.geolocation.long}
                    </Text>
                  )}
              </View>
            </View>
            <TextInput
              style={[
                GlobalStyle.input,
                {
                  width: 311,
                  borderRadius: 10,
                  borderColor: Orangecolor,
                  borderWidth: 1,
                  marginRight: 6,
                  padding: 8,
                  marginBottom: 6, 
                },
              ]}
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
              placeholder="Phone"
              keyboardType="numeric"
            />
            {errors.phone && touched.phone && (
              <Text style={GlobalStyle.error}>{errors.phone}</Text>
            )}
            <Pressable style={GlobalStyle.button} onPress={handleSubmit}>
              <Text style={GlobalStyle.buttonText}>Sign Up</Text>
            </Pressable>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                margin: 20,
              }}
            >
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: 20,
                  paddingRight: 10,
                }}
              >
                Already have an account?
              </Text>
              <Pressable onPress={() => navigation.navigate("login")}>
                <Text
                  style={{
                    color: Orangecolor,
                    fontSize: 20,
                  }}
                >
                  Login
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default SignupForm;
