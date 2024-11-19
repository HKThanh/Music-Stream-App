import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Image, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';

const api = 'https://api.deezer.com/search?q=';

const fetchSearchResults = async (searchText) => {
    try {
        const response = await fetch(api + searchText);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

// change duration to readable format
const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds}`;
};

// Search item
const SearchItem = ({ item, navigation }) => {
    return (
        <TouchableOpacity 
            style={styles.searchItemContainer}
            onPress={() => navigation.navigate('MusicPlayer', { item })}
            // onPress={() => console.log(item)}
        >
            <View style={{flexDirection: 'row'}}>
                <Image
                    source={{uri : item.album.cover_small}}
                    style={styles.searchItemImage}
                />
                <View>
                    <Text style={styles.songName}>{item.title}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.artistName}>{item.artist.name}</Text>
                        <Entypo name="dot-single" size={24} color="black" />
                        <Text style={styles.duration}>{formatDuration(item.duration)}</Text>
                    </View>
                </View>
            </View>
            <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
    );
};

const Search = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (searchText) {
            fetchSearchResults(searchText).then((data) => {
                setData(data.data);
            });
        }
    }, [searchText]);

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
                    <View style={[{ flex: 1, justifyContent: 'center', width: '90%' }, styles.buttonShadow]}>
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
                    <View style={{flex: 5, width: '90%'}}>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => <SearchItem item={item} navigation={navigation} />}
                            showsVerticalScrollIndicator={false}
                        />
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
    searchItemContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        marginBottom: 10,
    },
    searchItemImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    songName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    artistName: {
        fontSize: 14,
        color: 'gray',
    },
    duration: {
        fontSize: 14,
        color: 'gray',
    },
});

export default Search;