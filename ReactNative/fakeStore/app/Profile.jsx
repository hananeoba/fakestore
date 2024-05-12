import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';

const Profile = ({route, navigation}) => {

    return (
        <SafeAreaView>
            <View>
                <Image source={require('../src/assets/construction.png')} style={{width: 100, height: 100, alignSelf: 'center'}} />
                <Text style={{textAlign: 'center'}}> Sorry... Under Construction</Text>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Profile;
