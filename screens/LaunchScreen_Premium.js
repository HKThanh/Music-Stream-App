import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Image, Text, TextInput, TouchableOpacity, Dimensions, FlatList, KeyboardAvoidingView, ImageBackground, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const LaunchScreen_Premium = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../assets/Launch_Screen_Premium/Image_112.png')}
                style={{flex: 1}}
            >
                <ImageBackground 
                    source={require('../assets/Launch_Screen_Premium/Rectangle_6.png')}
                    style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', justifyContent: 'space-around'}}
                >
                    <Image source={require('../assets/Launch_Screen_Premium/Image_113.png')} />
                    <View style={{marginTop: 160}}>
                        <Text style={styles.title}>Wellcome to{'\n'}Premium</Text>
                        <Text style={styles.title}>...</Text>
                        <Pressable 
                            style={styles.button}
                            onPress={() => {
                                navigation.navigate('HomeScreen');
                            }}
                        >
                            <Text style={styles.buttonText}>Start Listening</Text>
                        </Pressable>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    title: {
        color: '#fff',
        fontSize: 42,
        fontWeight: '700',
        textAlign: 'center',
    },
    button: {
        width: (width / 1.5),
        height: width / 6,
        backgroundColor: '#171A1F',
        borderRadius: (width / 5) / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
    }
});

export default LaunchScreen_Premium;