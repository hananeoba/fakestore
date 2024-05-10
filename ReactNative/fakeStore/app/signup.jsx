import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import GlobalStyle from '../src/styles/GlobalStyle';
import { Formik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().min(6).required(),
  name: yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
  }),
  address: yup.object().shape({
    city: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    zipcode: yup.string().required(),
    geolocation: yup.object().shape({
      lat: yup.string().required(),
      long: yup.string().required(),
    }),
  }),
  phone: yup.string().required(),
});

const SignupForm = ({navigation}) => {
  return (
    <View>
      <Formik
        initialValues={{
          email: '',
          username: '',
          password: '',
          name: {
            firstname: '',
            lastname: '',
          },
          address: {
            city: '',
            street: '',
            number: '',
            zipcode: '',
            geolocation: {
              lat: '',
              long: '',
            },
          },
          phone: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          
          alert('User registered successfully');
          navigation.navigate('login');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={GlobalStyle.container}>
            <TextInput
              style={GlobalStyle.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && touched.email && <Text>{errors.email}</Text>}

            <TextInput
              style={GlobalStyle.input}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              placeholder="User name"
            />
            {errors.username && touched.username && <Text style={GlobalStyle.error}>{errors.username}</Text>}

            <TextInput
              style={GlobalStyle.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
            />
            {errors.password && touched.password && <Text style={GlobalStyle.error}>{errors.password}</Text>}

            <Text style={GlobalStyle.text}>Name:</Text>
            <TextInput
              style={GlobalStyle.input}
              onChangeText={handleChange('name.firstname')}
              onBlur={handleBlur('name.firstname')}
              value={values.name.firstname}
              placeholder="First name"
            />
            {errors.name && errors.name.firstname && touched.name && touched.name.firstname && <Text style={GlobalStyle.error}>{errors.name.firstname}</Text>}
            <TextInput
              style={GlobalStyle.input}
              onChangeText={handleChange('name.lastname')}
              onBlur={handleBlur('name.lastname')}
              value={values.name.lastname}
              placeholder="Last name"
            />
            {errors.name && errors.name.lastname && touched.name && touched.name.lastname && <Text style={GlobalStyle.error}>{errors.name.lastname}</Text>}

            <Text style={GlobalStyle.text}>Address:</Text>
            <TextInput
              style={GlobalStyle.input}
              onChangeText={handleChange('address.city')}
              onBlur={handleBlur('address.city')}
              value={values.address.city}
              placeholder="City"
            />
            {errors.address && errors.address.city && touched.address && touched.address.city && <Text style={GlobalStyle.error}>{errors.address.city}</Text>}
            <TextInput
              style={GlobalStyle.input}
              onChangeText={handleChange('address.street')}
              onBlur={handleBlur('address.street')}
              value={values.address.street}
              placeholder="Street"
            />
            {errors.address && errors.address.street && touched.address && touched.address.street && <Text style={GlobalStyle.error}>{errors.address.street}</Text>}
            <TextInput
              style={GlobalStyle.input}
              onChangeText={handleChange('address.number')}
              onBlur={handleBlur('address.number')}
              value={values.address.number}
              placeholder="Number"
            />
            {errors.address && errors.address.number && touched.address && touched.address.number && <Text>{errors.address.number}</Text>}
            <TextInput
              style={GlobalStyle.input}
              onChangeText={handleChange('address.zipcode')}
              onBlur={handleBlur('address.zipcode')}
              value={values.address.zipcode}
              placeholder="Zipcode"
            />
            {errors.address && errors.address.zipcode && touched.address && touched.address.zipcode && <Text style={GlobalStyle.error}>{errors.address.zipcode}</Text>}
            <TextInput
              style={GlobalStyle.input}
              onChangeText={handleChange('address.geolocation.lat')}
              onBlur={handleBlur('address.geolocation.lat')}
              value={values.address.geolocation.lat}
              placeholder="Latitude"
            />
            {errors.address && errors.address.geolocation && errors.address.geolocation.lat && touched.address && touched.address.geolocation && touched.address.geolocation.lat && <Text style={GlobalStyle.error}>{errors.address.geolocation.lat}</Text>}
            <TextInput
              style={GlobalStyle.input}
              onChangeText={handleChange('address.geolocation.long')}
              onBlur={handleBlur('address.geolocation.long')}
              value={values.address.geolocation.long}
              placeholder="Longitude"
            />
            {errors.address && errors.address.geolocation && errors.address.geolocation.long && touched.address && touched.address.geolocation && touched.address.geolocation.long && <Text style={GlobalStyle.error}>{errors.address.geolocation.long}</Text>}
            <TextInput
              style={GlobalStyle.input}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              placeholder="Phone"
            />
            {errors.phone && touched.phone && <Text style={GlobalStyle.error}>{errors.phone}</Text>}

            {errors && <Text style={GlobalStyle.error}>{`: ${JSON.stringify(errors)}`}</Text>}
            <Pressable 
              style={GlobalStyle.button}
              onPress={handleSubmit}  
            >
              <Text style={GlobalStyle.buttonText}>
                SignUp
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignupForm;
