import { SafeAreaView, Text, Image, Pressable, View, StyleSheet, ScrollView, FlatList, Dimensions } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

const { width } = Dimensions.get('window');

const playListItem = ({ item }) => (
    <View style={styles.playListContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.playListTitle}>{item.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.author}>{item.author}</Text>
                <Entypo name="dot-single" size={32} color="black" />
                <Text style={styles.numberOfSongs}>{item.numberOfSongs} Songs</Text>
            </View>
        </View>
        <Pressable style={{position: 'absolute', right: 10}}>
            <MaterialCommunityIcons name="chevron-right" size={40} color="black" />
        </Pressable>
    </View>
)

const MyPlayList = () => {
    const item = [
        {
            id: 1,
            title: 'Ipsum sit nulla',
            author: 'Asley Scott',
            numberOfSongs: 12,
            image: require('../assets/My_Playlists/Image_110.png')
        },
        {
            id: 2,
            title: 'Occaecat aliq',
            author: 'Jose Garcia',
            numberOfSongs: 4,
            image: require('../assets/My_Playlists/Image_111.png')
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Pressable>
                    <MaterialCommunityIcons name="chevron-left" size={30} color="black" />
                </Pressable>
                <Text style={styles.title}>PlayLists</Text>
                <Pressable>
                    <MaterialCommunityIcons name="cast" size={30} color="black" />
                </Pressable>
            </View>
            <FlatList 
                data={item}
                renderItem={playListItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
    },
    middleView: {
        padding: 10,
    },
    playListContainer: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginLeft: 10,
    },
    textContainer: {
        marginLeft: 10,
    },
    playListTitle: {
        fontSize: 20,
        fontWeight: '700',
    },
});

export default MyPlayList;