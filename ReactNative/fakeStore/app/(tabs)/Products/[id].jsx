import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { router } from 'expo-router';


const Product = () => {
    const {id} = useLocalSearchParams('id');

    return (
        <View>
            <Text>user id :{id} </Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Product;
