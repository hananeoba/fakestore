import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Tabs } from 'expo-router';

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='Index' />
            <Tabs.Screen name='Products' />
            <Tabs.Screen name='Users' />
        </Tabs>
    );
}

const styles = StyleSheet.create({})

export default Layout;
