import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const searchSuggestion = [
        'Search suggestion 1',
        'Search suggestion 2',
        'Search suggestion 3',
        'Search suggestion 4',
        'Search suggestion 5',
    ]

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.innerContainer}>
                    <View style={[{ flex: 1, justifyContent: 'center', width: '85%' }, styles.buttonShadow]}>
                        <TextInput
                            placeholder='Search here...'
                            style={[styles.input, styles.buttonShadow]}
                            value={searchText}
                            onChangeText={(text) => setSearchText(text)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <Ionicons 
                            name={isFocused ? "close-circle" : "search"}
                            size={24} 
                            color="black" 
                            style={{ position: 'absolute', right: 10 }}
                            onPress={() => {
                                setSearchText('');
                                Keyboard.dismiss();
                                setIsFocused(false);
                            }}
                        />
                    </View>
                    <View style={{flex: 5, width: '85%'}}>
                        {isFocused && searchSuggestion.map((suggestion, index) => (
                            <View key={index} style={{width: '100%', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                                <Text>{suggestion}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 30,
        backgroundColor: '#fff'
    },
    buttonShadow: {
        shadowColor: 'cyan',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 20,
    },
});

export default Search;