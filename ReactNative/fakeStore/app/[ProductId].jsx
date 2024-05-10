import { useLocalSearchParams } from 'expo-router';
import React, {useContext} from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { AuthContext } from '../src/context/authContext';

const ProductId = () => {
    const { id } = useLocalSearchParams();
    const {logout}= useContext(AuthContext);
    return (
        <View>
            <Text>Product ID: {id}</Text>
            <Pressable onPress={() => logout()}>
                <Text>logout</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProductId;
